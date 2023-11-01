import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { CompaniesModule } from 'src/companies/companies.module';
import { CompaniesService } from 'src/companies/companies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Service]), CompaniesModule],
  controllers: [ServicesController],
  providers: [ServicesService, CompaniesService],
  exports: [],
})
export class ServicesModule {}
