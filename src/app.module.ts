import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './companies/entities/company.entity';
import { ProductsModule } from './products/products.module';
import { ServicesModule } from './services/services.module';
import { CategoriesCrudModule } from './categories_crud/categories_crud.module';


@Module({
  imports: [
    CompaniesModule,

    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "1234",
      database: "db_landingpage",
      
      autoLoadEntities: true,
      synchronize: true,

    }),

    ProductsModule,

    ServicesModule,

    CategoriesCrudModule,
    
    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
