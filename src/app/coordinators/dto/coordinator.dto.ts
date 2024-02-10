import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CoordinatorDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  User_id: string;
}
