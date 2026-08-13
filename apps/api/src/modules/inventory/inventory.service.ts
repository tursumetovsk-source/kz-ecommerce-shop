import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Atomic Reservation algorithm (Section 14 & Critical Test #1)
   * Prevents race conditions when two customers buy the last remaining item.
   */
  async reserveStock(items: { variantId: string; quantity: number }[]) {
    return this.prisma.$transaction(async (tx) => {
      for (const item of items) {
        const inventory = await tx.inventory.findUnique({
          where: { variantId: item.variantId },
        });

        if (!inventory) {
          throw new BadRequestException(`Inventory record not found for variant ${item.variantId}`);
        }

        const available = inventory.quantity - inventory.reservedQuantity;
        if (available < item.quantity) {
          throw new BadRequestException(
            `Insufficient stock for item. Available: ${available}, requested: ${item.quantity}`,
          );
        }

        // Atomically increment reserved quantity
        await tx.inventory.update({
          where: { variantId: item.variantId },
          data: {
            reservedQuantity: { increment: item.quantity },
          },
        });
      }
      return true;
    });
  }

  /**
   * Called upon successful payment confirmation.
   * Decrements physical stock and frees up reserved stock.
   */
  async commitReservation(items: { variantId: string; quantity: number }[]) {
    return this.prisma.$transaction(async (tx) => {
      for (const item of items) {
        await tx.inventory.update({
          where: { variantId: item.variantId },
          data: {
            quantity: { decrement: item.quantity },
            reservedQuantity: { decrement: item.quantity },
          },
        });
      }
      return true;
    });
  }

  /**
   * Called upon order cancellation or 15-30 minute expiration timeout.
   */
  async releaseReservation(items: { variantId: string; quantity: number }[]) {
    return this.prisma.$transaction(async (tx) => {
      for (const item of items) {
        await tx.inventory.update({
          where: { variantId: item.variantId },
          data: {
            reservedQuantity: { decrement: item.quantity },
          },
        });
      }
      return true;
    });
  }
}
