import { IsNotEmpty, IsString } from 'class-validator';

export class ActivityUpdateDto {
  @IsNotEmpty()
  @IsString()
  title: string;

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
  category: string;

  @IsNotEmpty()
  @IsString()
  Event_id: string;
}
