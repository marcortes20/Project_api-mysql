import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {


  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  discount: string;

  @IsString()
  @IsOptional()
  price: string;

  @IsString()
  @IsOptional()
  size:string

  @IsNumber()
  @IsOptional()
  company_id: number;

}
