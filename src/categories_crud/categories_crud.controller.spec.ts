import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesCrudController } from './categories_crud.controller';
import { CategoriesCrudService } from './categories_crud.service';

describe('CategoriesCrudController', () => {
  let controller: CategoriesCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesCrudController],
      providers: [CategoriesCrudService],
    }).compile();

    controller = module.get<CategoriesCrudController>(CategoriesCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
