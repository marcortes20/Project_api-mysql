import { Company } from "src/companies/entities/company.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity("products")
export class Product {

  @Column({primary: true, generated: true})
  id: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  discount: string;

  @Column()
  price: string;

  @Column()
  size:string



  @ManyToOne(() => Company, company => company.products, {
    // cascade: true,
    eager: true, // para que traiga las raza al hacer un findOne
  })
  company: Company;

}
