import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'src/utils/entities';
import { OrdersController } from '../controllers/order.controller';
import { OrdersService } from '../services/order.service';
import { ProductModule } from 'src/modules/product.module';

@Module({
    imports:[TypeOrmModule.forFeature(entities),
    ProductModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrderModule {}
