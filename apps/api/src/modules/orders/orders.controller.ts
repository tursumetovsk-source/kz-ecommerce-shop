import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { OrdersService } from './orders.service';

@ApiTags('Orders')
@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('checkout')
  @ApiOperation({ summary: 'Create new order and reserve stock' })
  async checkout(@Body() dto: any) {
    const data = await this.ordersService.createOrder(dto);
    return { data };
  }

  @Get('orders/:id')
  @ApiOperation({ summary: 'Get order status and details by ID' })
  async getOrder(@Param('id') id: string) {
    const data = await this.ordersService.getOrderById(id);
    return { data };
  }
}
