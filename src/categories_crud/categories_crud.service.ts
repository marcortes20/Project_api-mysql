import { Injectable } from '@nestjs/common';
import { CreateCategoriesCrudDto } from './dto/create-categories_crud.dto';
import { UpdateCategoriesCrudDto } from './dto/update-categories_crud.dto';

@Injectable()
export class CategoriesCrudService {
  create(createCategoriesCrudDto: CreateCategoriesCrudDto) {
    return 'This action adds a new categoriesCrud';
  }

  findAll() {
    return `This action returns all categoriesCrud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriesCrud`;
  }

  update(id: number, updateCategoriesCrudDto: UpdateCategoriesCrudDto) {
    return `This action updates a #${id} categoriesCrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriesCrud`;
  }
}
