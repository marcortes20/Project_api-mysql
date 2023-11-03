import { Module } from '@nestjs/common';
import { MenuOptionsService } from './menu-options.service';
import { MenuOptionsController } from './menu-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuOption } from './entities/menu-option.entity';
import { CompaniesModule } from 'src/companies/companies.module';
import { CompaniesService } from 'src/companies/companies.service';

@Module({
  imports: [TypeOrmModule.forFeature([MenuOption]), CompaniesModule],
  controllers: [MenuOptionsController],
  providers: [MenuOptionsService, CompaniesService],
})
export class MenuOptionsModule {}
