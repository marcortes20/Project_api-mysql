import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompaniesService {

  constructor(

    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) { }



  async getCompanyWithChildren(id: number) {
    return this.companyRepository.createQueryBuilder('company')
      .where('company.id = :companyId', { companyId: id }) // Especifica el alias de la tabla 'company'
      .leftJoinAndSelect('company.products', 'products')
      .leftJoinAndSelect('company.categories', 'categories')
      .leftJoinAndSelect('company.services', 'services')
      .leftJoinAndSelect('company.menuOptions', 'menuOptions')
      .getOne();
  }
  
  
  async create(createCompanyDto: CreateCompanyDto) {
    const company = this.companyRepository.create(createCompanyDto);
    return  await this.companyRepository.save(company);
  }

  async findAll() {
    return await this.companyRepository.find();
  }

  async findOne(id: number) {
    return await this.companyRepository.findOneBy({id});
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return await this.companyRepository.update(id ,updateCompanyDto);
  }

  async remove(id: number) {
    return await this.companyRepository.delete({id});
  }
}
