import { IsNotEmpty, IsEmail } from 'class-validator';

export class CoordinatorDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
