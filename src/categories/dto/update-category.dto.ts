import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {

  @IsNumber()
  @IsOptional()
  id: number;

  @IsOptional()
  @IsString()
  img: string;

  @IsNumber()
  @IsOptional()
  company_id: number;

}
