import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/companies/entities/company.entity';

@Injectable()
export class ServicesService {

  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,

    @InjectRepository(Company)
    private company_Repo: Repository<Company>,

  ) { }

  async create(createServiceDto: CreateServiceDto) {
    const company = await this.company_Repo.findOneBy({ id: createServiceDto.company_id });

    if (!company) {
      throw new BadRequestException('company not found');
    }

    const service = this.serviceRepository.create({
      ...createServiceDto,
      company
    });

    return await this.serviceRepository.save(service);


  }

  async findAll() {
    return await this.serviceRepository.find();
  }

  async findOne(id: number) {
    return await this.serviceRepository.findOneBy({ id });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {

    const service = await this.serviceRepository.findOneBy({ id });

    if (!service) {
      throw new BadRequestException('service not found');
    }

    let company;

    if (updateServiceDto.company_id) {

      company = await this.company_Repo.findOneBy({ id: updateServiceDto.company_id });

    }

    if (!company) {

      throw new BadRequestException('Company not found');
    }



    return await this.serviceRepository.save({
      ...service,
      ...updateServiceDto,
      company


    })

  }

  async remove(id: number) {
    return this.serviceRepository.delete({id});
  }
}
