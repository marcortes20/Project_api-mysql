import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMenuOptionDto } from './dto/create-menu-option.dto';
import { UpdateMenuOptionDto } from './dto/update-menu-option.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuOption } from './entities/menu-option.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/companies/entities/company.entity';

@Injectable()
export class MenuOptionsService {

  constructor(
    @InjectRepository(MenuOption)
    private menuOptionRepository: Repository<MenuOption>,

    @InjectRepository(Company)
    private company_Repo: Repository<Company>,

  ) { }

  async create(createMenuOptionDto: CreateMenuOptionDto) {
    const company = await this.company_Repo.findOneBy({ id: createMenuOptionDto.company_id });

    if (!company) {
      throw new BadRequestException('company not found');
    }
    const menu_option = this.menuOptionRepository.create({
      ...createMenuOptionDto,
      company
    });

    return await this.menuOptionRepository.save(menu_option);
  }


  async findAll() {
    return this.menuOptionRepository.find();
  }

  async findOne(id: number) {
    return this.menuOptionRepository.findOneBy({ id });
  }

  async update(id: number, updateMenuOptionDto: UpdateMenuOptionDto) {
    const menu_option = await this.menuOptionRepository.findOneBy({ id });

    if (!menu_option) {
      throw new BadRequestException('menu option not found');
    }

    let company;

    if (updateMenuOptionDto.company_id) {

      company = await this.company_Repo.findOneBy({ id: updateMenuOptionDto.company_id });

    }

    if (!company) {

      throw new BadRequestException('Company not found');
    }
    return await this.menuOptionRepository.save({
      ...menu_option,
      ...updateMenuOptionDto,
      company
    })
  }

  async remove(id: number) {
    return this.menuOptionRepository.delete({ id });
  }
}
