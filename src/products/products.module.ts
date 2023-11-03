import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CompaniesModule } from 'src/companies/companies.module';
import { CompaniesService } from 'src/companies/companies.service';

@Module({
  imports:[TypeOrmModule.forFeature([Product]), CompaniesModule],
  controllers: [ProductsController],
  providers: [ProductsService, CompaniesService],
  exports: [],
})
export class ProductsModule {}
