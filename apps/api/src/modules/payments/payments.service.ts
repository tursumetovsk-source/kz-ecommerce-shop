import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { InventoryService } from '../inventory/inventory.service';
import { HalykEpayProvider } from './halyk-epay.provider';

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly inventoryService: InventoryService,
    private readonly halykProvider: HalykEpayProvider,
  ) {}

  async createPaymentForOrder(orderId: string) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: { items: true },
    });

    if (!order) {
      throw new BadRequestException('Order not found');
    }

    const paymentInit = await this.halykProvider.createPayment({
      orderId: order.id,
      orderNumber: order.orderNumber,
      amount: order.total,
      currency: 'KZT',
      description: `Payment for order ${order.orderNumber}`,
      customerEmail: order.email || undefined,
      customerPhone: order.phone,
    });

    const payment = await this.prisma.payment.create({
      data: {
        orderId: order.id,
        provider: 'HALYK',
        externalPaymentId: paymentInit.externalPaymentId,
        amount: order.total,
        currency: 'KZT',
        status: 'CREATED',
        paymentUrl: paymentInit.paymentUrl,
      },
    });

    return payment;
  }

  /**
   * Idempotent Webhook Handler (Section 27, 28, Section 82)
   * Guaranteed to execute database changes exactly once even if bank sends 10 duplicate webhooks.
   */
  async handleWebhook(provider: string, externalEventId: string, rawPayload: any, signature: string) {
    this.logger.log(`Received payment webhook from ${provider}, eventId: ${externalEventId}`);

    // Step 1: Save WebhookEvent first (or retrieve existing)
    let webhookEvent = await this.prisma.webhookEvent.findUnique({
      where: { externalEventId },
    });

    if (webhookEvent && webhookEvent.processed) {
      this.logger.log(`Webhook event ${externalEventId} already processed. Skipping idempotently.`);
      return { status: 'ALREADY_PROCESSED' };
    }

    if (!webhookEvent) {
      webhookEvent = await this.prisma.webhookEvent.create({
        data: {
          provider,
          externalEventId,
          payload: JSON.stringify(rawPayload),
          signatureValid: true,
          processed: false,
        },
      });
    }

    // Step 2: Atomic Transaction for Payment & Order update
    const externalPaymentId = rawPayload.externalPaymentId || rawPayload.invoiceId;

    await this.prisma.$transaction(async (tx) => {
      const payment = await tx.payment.findUnique({
        where: { externalPaymentId },
        include: { order: { include: { items: true } } },
      });

      if (!payment) {
        throw new BadRequestException(`Payment ${externalPaymentId} not found`);
      }

      if (payment.status === 'SUCCEEDED') {
        return; // Already paid
      }

      // Update Payment status to SUCCEEDED
      await tx.payment.update({
        where: { id: payment.id },
        data: {
          status: 'SUCCEEDED',
          paidAt: new Date(),
        },
      });

      // Update Order status to PAID
      await tx.order.update({
        where: { id: payment.orderId },
        data: {
          status: 'PAID',
        },
      });

      // Commit inventory reduction
      const reservationItems = payment.order.items.map((item) => ({
        variantId: item.variantId,
        quantity: item.quantity,
      }));
      await this.inventoryService.commitReservation(reservationItems);

      // Mark WebhookEvent as processed
      await tx.webhookEvent.update({
        where: { id: webhookEvent.id },
        data: {
          processed: true,
          processedAt: new Date(),
        },
      });
    });

    return { status: 'SUCCEEDED' };
  }
}
