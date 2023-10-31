import {IsString } from "class-validator";


export class CreateCompanyDto {

  @IsString()
  company_name: string;

  @IsString()
  company_title_description: string;

  @IsString()
  company_description: string;

  @IsString()
  company_img_description: string;


}
