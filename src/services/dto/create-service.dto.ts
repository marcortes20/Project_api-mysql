import { IsNumber, IsString } from "class-validator";

export class CreateServiceDto {


  @IsString()
  title: string;

  @IsString()
  desccription: string;

  @IsString()
  icon: string;

  @IsNumber()
  company_id: number;

}
