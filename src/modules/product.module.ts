import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'src/utils/entities';
import { ProductsController } from '../controllers/product.controller';
import { ProductsService } from '../services/product.service';

@Module({
    imports:[TypeOrmModule.forFeature(entities)],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports:[ProductsService]
})
export class ProductModule {}
