import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FiscalProvider, FiscalReceipt } from './fiscal-provider.interface';

@Injectable()
export class FiscalizationService implements FiscalProvider {
  private readonly logger = new Logger(FiscalizationService.name);

  constructor(private readonly prisma: PrismaService) {}

  async createSaleReceipt(orderId: string): Promise<FiscalReceipt> {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: { items: true },
    });

    if (!order) {
      throw new Error(`Order ${orderId} not found for fiscalization`);
    }

    const receiptNumber = `KKM-${order.orderNumber}`;
    this.logger.log(`Issuing KKM sale receipt ${receiptNumber} for amount ${order.total} KZT`);

    return {
      receiptId: `FISCAL-${order.id}`,
      receiptNumber,
      receiptUrl: `https://ofd.kz/receipts/${receiptNumber}`,
      vatAmount: (order.total * BigInt(12)) / BigInt(112), // 12% VAT calculation
      totalAmount: order.total,
      createdAt: new Date(),
    };
  }

  async createRefundReceipt(refundId: string): Promise<FiscalReceipt> {
    const refund = await this.prisma.refund.findUnique({
      where: { id: refundId },
    });

    if (!refund) {
      throw new Error(`Refund ${refundId} not found`);
    }

    const receiptNumber = `KKM-RFD-${refund.id.slice(0, 8)}`;
    return {
      receiptId: `FISCAL-RFD-${refund.id}`,
      receiptNumber,
      receiptUrl: `https://ofd.kz/receipts/${receiptNumber}`,
      vatAmount: (refund.amount * BigInt(12)) / BigInt(112),
      totalAmount: refund.amount,
      createdAt: new Date(),
    };
  }

  async getReceipt(receiptId: string): Promise<FiscalReceipt> {
    return {
      receiptId,
      receiptNumber: `KKM-${receiptId}`,
      receiptUrl: `https://ofd.kz/receipts/${receiptId}`,
      vatAmount: BigInt(0),
      totalAmount: BigInt(0),
      createdAt: new Date(),
    };
  }
}
