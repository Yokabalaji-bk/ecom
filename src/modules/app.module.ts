import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { Product } from '../entities/product.entity';
import { User } from '../entities/user.entity';
import { UserModule } from './user.module';
import { ProductModule } from './product.module';
import { OrderModule } from './order.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',       
      port: 5432,            
      username: 'postgres', 
      password: 'root',  
      database: 'ecom',
      entities: [User, Product, Order],
      synchronize: true, 
    }),
    
    UserModule,
    ProductModule,
    OrderModule,
    AuthModule,
  ],
  exports:[],
})
export class AppModule {}
