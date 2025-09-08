import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';
import { UserModule } from 'src/modules/user.module';
import { JwtStrategy } from '../services/auth.stratigies';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'src/utils/entities';

@Module({

  imports: [
TypeOrmModule.forFeature(entities),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'your_jwt_secret', 
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
