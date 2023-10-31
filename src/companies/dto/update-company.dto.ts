import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import { IsOptional } from 'class-validator';


export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  
  
  @IsOptional()
  company_name: string;

  @IsOptional()
  company_title_description: string;

  @IsOptional()
  company_description: string;

  @IsOptional()
  company_img_description: string;





}
