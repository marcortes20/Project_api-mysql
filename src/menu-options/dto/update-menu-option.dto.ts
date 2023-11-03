import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuOptionDto } from './create-menu-option.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMenuOptionDto extends PartialType(CreateMenuOptionDto) {

  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  company_id: number;

  
}
