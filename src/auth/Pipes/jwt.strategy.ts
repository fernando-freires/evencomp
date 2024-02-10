import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'chaveParaTeste',
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      admin: payload.admin,
    };
  }
}
