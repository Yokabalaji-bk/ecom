import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from 'src/services/product.service';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepo: Repository<Order>,
    @InjectRepository(User) private usersRepo: Repository<User>,
    private productsService: ProductsService,
  ) {}

  async create(userId: number, productIds: number[],dto): Promise<Order> {
    const user = await this.usersRepo.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const products = await this.productsService.findByIds(productIds);
    if (products.length !== productIds.length) {
      throw new NotFoundException('Some products not found');
    }



    const order = this.ordersRepo.create({ user, products,shippingAddress:dto.shippingAddress,deliveryAddress:dto.deliveryAddress });
    return this.ordersRepo.save(order);
  }

  async findByUserId(userId: number): Promise<Order[]> {
    return this.ordersRepo.find({
      where: { user: { id: userId } },
      relations: ['products', 'user'],
    });
  }
}
