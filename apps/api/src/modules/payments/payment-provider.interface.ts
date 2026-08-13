export interface PaymentInitResult {
  paymentUrl: string;
  externalPaymentId: string;
}

export interface PaymentProvider {
  createPayment(params: {
    orderId: string;
    orderNumber: string;
    amount: bigint;
    currency: string;
    description: string;
    customerEmail?: string;
    customerPhone?: string;
  }): Promise<PaymentInitResult>;

  getPaymentStatus(externalPaymentId: string): Promise<{ status: string; paidAt?: Date }>;

  refundPayment(externalPaymentId: string, amount: bigint, reason?: string): Promise<{ refundId: string; success: boolean }>;

  cancelPayment(externalPaymentId: string): Promise<{ success: boolean }>;

  verifyWebhook(signature: string, rawPayload: string): boolean;
}
