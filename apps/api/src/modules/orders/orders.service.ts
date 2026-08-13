import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { InventoryService } from '../inventory/inventory.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly inventoryService: InventoryService,
  ) {}

  /**
   * Order Checkout & Creation (Section 14, 19, 20, 21, 84)
   * 1. Fetches authentic Prices and Variants from Database (ignores frontend price inputs).
   * 2. Reserves Stock atomically.
   * 3. Creates Order and OrderItem Snapshots.
   */
  async createOrder(dto: {
    userId?: string;
    customerName: string;
    phone: string;
    email?: string;
    deliveryMethod: string;
    paymentMethod: string;
    items: { variantId: string; quantity: number }[];
  }) {
    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException('Order items cannot be empty');
    }

    // Step 1: Reserve stock atomically first
    await this.inventoryService.reserveStock(dto.items);

    // Step 2: Calculate prices strictly from Database
    const variantIds = dto.items.map((i) => i.variantId);
    const dbVariants = await this.prisma.productVariant.findMany({
      where: { id: { in: variantIds } },
      include: { product: true },
    });

    if (dbVariants.length !== dto.items.length) {
      throw new BadRequestException('One or more product variants do not exist');
    }

    const variantMap = new Map(dbVariants.map((v) => [v.id, v]));

    let subtotal = BigInt(0);
    const orderItemSnapshots: any[] = [];

    for (const item of dto.items) {
      const variant = variantMap.get(item.variantId)!;
      const itemPrice = variant.price; // Authentic DB price snapshot!
      const itemTotal = itemPrice * BigInt(item.quantity);

      subtotal += itemTotal;

      orderItemSnapshots.push({
        productId: variant.productId,
        variantId: variant.id,
        productName: variant.product.name,
        sku: variant.sku,
        price: itemPrice,
        quantity: item.quantity,
        total: itemTotal,
      });
    }

    const deliveryPrice = BigInt(0); // Free delivery for MVP
    const total = subtotal + deliveryPrice;
    const orderNumber = `KZ-${Math.floor(100000 + Math.random() * 900000)}`;

    // Step 3: Save Order and Snapshots
    const order = await this.prisma.order.create({
      data: {
        orderNumber,
        userId: dto.userId || null,
        customerName: dto.customerName,
        phone: dto.phone,
        email: dto.email || null,
        deliveryMethod: dto.deliveryMethod,
        paymentMethod: dto.paymentMethod,
        subtotal,
        deliveryPrice,
        total,
        status: 'PENDING_PAYMENT',
        items: {
          create: orderItemSnapshots,
        },
      },
      include: { items: true },
    });

    return order;
  }

  async getOrderById(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { items: true, payments: true, shipments: true },
    });

    if (!order) {
      throw new NotFoundException(`Order ${id} not found`);
    }

    return order;
  }
}
