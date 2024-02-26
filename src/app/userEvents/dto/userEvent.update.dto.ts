import { IsNotEmpty, IsString } from 'class-validator';

export class UserEventsUpdateDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  activity_id: string;
}
