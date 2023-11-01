import { IsNumber, IsString } from "class-validator";
export class CreateCategoryDto {

  @IsString()
  img: string;

  @IsNumber()
  company_id: number;
}
