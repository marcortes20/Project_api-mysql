import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesCrudService } from './categories_crud.service';

describe('CategoriesCrudService', () => {
  let service: CategoriesCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesCrudService],
    }).compile();

    service = module.get<CategoriesCrudService>(CategoriesCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
