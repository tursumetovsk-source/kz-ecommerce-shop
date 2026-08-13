export interface FiscalReceipt {
  receiptId: string;
  receiptNumber: string;
  receiptUrl: string;
  nktCode?: string;
  vatAmount: bigint;
  totalAmount: bigint;
  createdAt: Date;
}

export interface FiscalProvider {
  createSaleReceipt(orderId: string): Promise<FiscalReceipt>;
  createRefundReceipt(refundId: string): Promise<FiscalReceipt>;
  getReceipt(receiptId: string): Promise<FiscalReceipt>;
}
