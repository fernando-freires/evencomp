import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserUpdateDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  type?: string;

  @IsNotEmpty()
  @IsBoolean()
  admin: boolean;
}
