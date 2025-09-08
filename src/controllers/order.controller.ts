import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { JwtAuthGuard } from 'src/guards/jwt.auth.guards';
import { OrdersService } from '../services/order.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("Orders")
@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() dto: CreateOrderDto, @Req() req) {    
    const userId = req.user.userId;
    return this.service.create(userId, dto.productIds,dto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  getMyOrders(@Req() req) {
    const userId = req.user.userId;
    
    return this.service.findByUserId(userId);
  }
}
