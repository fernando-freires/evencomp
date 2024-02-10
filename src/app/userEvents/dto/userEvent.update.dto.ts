import { IsNotEmpty, IsString } from 'class-validator';

export class UserEventsUpdateDto {
  @IsNotEmpty()
  @IsString()
  User_id: string;

  @IsNotEmpty()
  @IsString()
  Events_id: string;

  @IsNotEmpty()
  @IsString()
  Activities_id: string;
}
