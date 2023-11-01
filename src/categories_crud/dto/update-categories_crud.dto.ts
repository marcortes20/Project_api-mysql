import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriesCrudDto } from './create-categories_crud.dto';

export class UpdateCategoriesCrudDto extends PartialType(CreateCategoriesCrudDto) {}
