import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    example: 'Wireless Headphones',
    description: 'The name of the product',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 99.99,
    description: 'The price of the product',
    type: Number,
  })
  @IsNumber()
  price: number;
}
