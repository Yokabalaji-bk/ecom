import { Controller, Post, Body } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductsService } from '../services/product.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Product")
@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.service.create(dto);
  }
}
