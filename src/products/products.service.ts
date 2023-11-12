
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/companies/entities/company.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Company)
    private company_Repo: Repository<Company>,

  ) { }


  async create(createProductDto: CreateProductDto) {
    const company = await this.company_Repo.findOneBy({ id: createProductDto.company_id });

    if (!company) {
      throw new BadRequestException('company not found');
    }

    const product = this.productRepository.create({
      ...createProductDto,
      company

    });

    return await this.productRepository.save(product);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {

    const product = await this.productRepository.findOneBy({ id });

    if (!product) {

      throw new BadRequestException('Product not found');
    }

    return await this.productRepository.save({
      ...product,
      ...updateProductDto,
    })

  }

  async remove(id: number) {
    return this.productRepository.delete({ id });
  }
}
