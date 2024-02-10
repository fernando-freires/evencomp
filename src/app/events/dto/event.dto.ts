import { IsNotEmpty, IsString } from 'class-validator';

export class EventDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  dateStart: Date;

  @IsNotEmpty()
  @IsString()
  dateEnd: Date;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  group: string;
}
