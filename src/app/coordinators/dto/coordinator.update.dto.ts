import { IsNotEmpty, IsEmail } from 'class-validator';

export class CoordinatorUpdateDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
