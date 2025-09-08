import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';
import { OrderStatus } from 'src/utils/enums/order.status.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Column,
} from 'typeorm';



@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.orders, { eager: true })
  user: User;

  @ManyToMany(() => Product, { eager: true })
  @JoinTable()
  products: Product[];

  @Column({ type: 'text' })
  shippingAddress: string;

  @Column({ type: 'text' })
  deliveryAddress: string;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;
}
