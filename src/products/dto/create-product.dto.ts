import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  discount: string;

  @IsString()
  price: string;

  @IsString()
  size:string

  @IsNumber()
  company_id: number;
}
