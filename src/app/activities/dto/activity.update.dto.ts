import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ActivityUpdateDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  speaker: string;

  @IsNotEmpty()
  @IsString()
  dateStart: Date;

  @IsNotEmpty()
  @IsString()
  dateEnd: Date;

  @IsNotEmpty()
  @IsString()
  startTime: Date;

  @IsNotEmpty()
  @IsString()
  duration: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @IsOptional()
  @IsString()
  event_id?: string;

  @IsNotEmpty()
  @IsNumber()
  subscribersLimit: number;
}
