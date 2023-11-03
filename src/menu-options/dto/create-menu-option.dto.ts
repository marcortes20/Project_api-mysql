import { IsNumber, IsString } from "class-validator";

export class CreateMenuOptionDto {

  @IsString()
  name: string;

  @IsNumber()
  company_id: number;
}
