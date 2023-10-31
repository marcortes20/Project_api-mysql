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
  discount: number;

  @Column()
  price: number;

  @Column()
  size:string

  @ManyToOne(() => Company, company => company.product)
  company: Company;

}
