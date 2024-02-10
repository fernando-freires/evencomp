import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
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
