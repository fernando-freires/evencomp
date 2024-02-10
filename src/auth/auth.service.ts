import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UserEntity } from 'src/app/users/user.entity';
import { UserService } from 'src/app/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtservice: JwtService,
  ) {}

  async login(usuario) {
    const payload = {
      sub: usuario.id,
      email: usuario.email,
      name: usuario.name,
      admin: usuario.admin,
    };

    return {
      id: usuario.id,
      email: usuario.email,
      name: usuario.name,
      admin: usuario.admin,
      token: this.jwtservice.sign(payload),
    };
  }

  async validateUser(email: string, password: string) {
    let usuario: UserEntity;
    try {
      usuario = await this.userService.getUserByEmail(email);
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, usuario.password);
    if (!isPasswordValid) return null;

    return usuario;
  }
}
