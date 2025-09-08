// src/order/dto/create-order.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsArray, IsNumber } from 'class-validator';
import { OrderStatus } from 'src/utils/enums/order.status.enum';

export class CreateOrderDto {

  @ApiProperty({
    description: 'List of product IDs included in the order',
    example: [1, 2, 3],
  })
  @IsArray()
  @IsNotEmpty()
  productIds: number[];

  @ApiProperty({
    description: 'Shipping address of the order',
    example: '123 Main St, Springfield',
  })
  @IsString()
  @IsNotEmpty()
  shippingAddress: string;

  @ApiProperty({
    description: 'Delivery address of the order',
    example: '456 Elm St, Shelbyville',
  })
  @IsString()
  @IsNotEmpty()
  deliveryAddress: string;
}
