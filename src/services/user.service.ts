import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password, address } = createUserDto;

    const checkUser=await this.usersRepo.findOne({where:{email:email}})
    
    if(checkUser){
      throw new BadRequestException('already existing the user')

    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const user = this.usersRepo.create({
      name,
      email,
      password: hashedPassword,
      address: address,
    });

    return this.usersRepo.save(user);
  }
}
