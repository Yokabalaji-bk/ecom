import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'User email address' })
  @IsString()
  email: string;

  @ApiProperty({ example: 'strongPassword123', description: 'User password' })
  @IsString()
  password: string;

  @ApiProperty({ example: '123 Main St, City, Country', description: 'User address' })
  @IsString()
  address: string;
}
