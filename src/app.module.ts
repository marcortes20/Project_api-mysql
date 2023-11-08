import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ServicesModule } from './services/services.module';
import { CategoriesModule } from './categories/categories.module';

import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MenuOptionsModule } from './menu-options/menu-options.module';


@Module({
  imports: [

    CompaniesModule,

    ProductsModule,

    ServicesModule,

    CategoriesModule,

    MenuOptionsModule,

    //npm install --save @nestjs/serve-static
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src/views'),   // <-- path to the static files
    }),

    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "#Pln-7uj602",
      database: "db_landingpage",

      autoLoadEntities: true,
      synchronize: true,
      logging: true,

    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
