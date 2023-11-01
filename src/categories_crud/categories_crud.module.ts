import { Module } from '@nestjs/common';
import { CategoriesCrudService } from './categories_crud.service';
import { CategoriesCrudController } from './categories_crud.controller';

@Module({
  controllers: [CategoriesCrudController],
  providers: [CategoriesCrudService],
})
export class CategoriesCrudModule {}
