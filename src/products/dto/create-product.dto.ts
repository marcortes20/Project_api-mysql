import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsNumber()
  discount: number;

  @IsNumber()
  price: number;

  @IsString()
  size:string

  @IsNumber()
  company_id: number;
}
