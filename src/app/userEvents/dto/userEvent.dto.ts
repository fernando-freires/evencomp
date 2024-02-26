import { IsNotEmpty, IsString } from 'class-validator';

export class UserEventsDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  activity_id: string;
}
