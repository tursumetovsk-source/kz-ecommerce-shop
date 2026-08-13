import { Controller, Post, Param, Body, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';

@ApiTags('Payments')
@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('payments/:orderId/create')
  @ApiOperation({ summary: 'Initiate payment session for order' })
  async createPayment(@Param('orderId') orderId: string) {
    const data = await this.paymentsService.createPaymentForOrder(orderId);
    return { data };
  }

  @Post('webhooks/halyk')
  @ApiOperation({ summary: 'Receive Halyk ePay payment webhook' })
  async halykWebhook(@Body() payload: any, @Headers('x-signature') signature: string) {
    const externalEventId = payload.eventId || payload.transactionId || `HLK-EVT-${Date.now()}`;
    return this.paymentsService.handleWebhook('HALYK', externalEventId, payload, signature || '');
  }

  @Post('webhooks/freedom-pay')
  @ApiOperation({ summary: 'Receive Freedom Pay payment webhook' })
  async freedomPayWebhook(@Body() payload: any, @Headers('x-signature') signature: string) {
    const externalEventId = payload.pg_payment_id || `FDM-EVT-${Date.now()}`;
    return this.paymentsService.handleWebhook('FREEDOMPAY', externalEventId, payload, signature || '');
  }
}
