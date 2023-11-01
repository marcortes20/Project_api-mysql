import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/companies/entities/company.entity';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,

    @InjectRepository(Company)
    private company_Repo: Repository<Company>,

  ) { }

  async create(createCategoryDto: CreateCategoryDto) {
    const company = await this.company_Repo.findOneBy({ id: createCategoryDto.company_id });

    if (!company) {
      throw new BadRequestException('company not found');
    }

    const category = this.categoryRepository.create({
      ...createCategoryDto,
      company
    });

    return await this.categoryRepository.save(category);

  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOneBy({ id });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {

    const category = await this.categoryRepository.findOneBy({ id });

    if (!category) {
      throw new BadRequestException('service not found');
    }

    let company;

    if (updateCategoryDto.company_id) {

      company = await this.company_Repo.findOneBy({ id: updateCategoryDto.company_id });

    }

    if (!company) {

      throw new BadRequestException('Company not found');
    }
    return await this.categoryRepository.save({
      ...category,
      ...updateCategoryDto,
      company
    })
  }

  async remove(id: number) {
    return this.categoryRepository.delete({ id });
  }
}
