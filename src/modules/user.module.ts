import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/user.controller';
import { UsersService } from '../services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'src/utils/entities';

@Module({
  imports:[TypeOrmModule.forFeature(entities)],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
