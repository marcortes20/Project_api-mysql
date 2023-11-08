import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  desccription: string;

  @IsString()
  @IsOptional()
  icon: string;

  @IsNumber()
  @IsOptional()
  company_id: number;

}
