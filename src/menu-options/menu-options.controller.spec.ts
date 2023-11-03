import { Test, TestingModule } from '@nestjs/testing';
import { MenuOptionsController } from './menu-options.controller';
import { MenuOptionsService } from './menu-options.service';

describe('MenuOptionsController', () => {
  let controller: MenuOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuOptionsController],
      providers: [MenuOptionsService],
    }).compile();

    controller = module.get<MenuOptionsController>(MenuOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
