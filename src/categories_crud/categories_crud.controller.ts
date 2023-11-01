import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesCrudService } from './categories_crud.service';
import { CreateCategoriesCrudDto } from './dto/create-categories_crud.dto';
import { UpdateCategoriesCrudDto } from './dto/update-categories_crud.dto';

@Controller('categories-crud')
export class CategoriesCrudController {
  constructor(private readonly categoriesCrudService: CategoriesCrudService) {}

  @Post()
  create(@Body() createCategoriesCrudDto: CreateCategoriesCrudDto) {
    return this.categoriesCrudService.create(createCategoriesCrudDto);
  }

  @Get()
  findAll() {
    return this.categoriesCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesCrudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriesCrudDto: UpdateCategoriesCrudDto) {
    return this.categoriesCrudService.update(+id, updateCategoriesCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesCrudService.remove(+id);
  }
}
