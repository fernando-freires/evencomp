import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './Pipes/jwt.strategy';
import { LocalStrategy } from './Pipes/local.strategy';
import { UsuariosModule } from 'src/app/users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsuariosModule,
    PassportModule,
    JwtModule.register({
      privateKey: 'chaveParaTeste',
      signOptions: { expiresIn: '48000s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
