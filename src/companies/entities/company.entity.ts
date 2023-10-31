import { Product } from "src/products/entities/product.entity";
import { Service } from "src/services/entities/service.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("companies")
export class Company {
  @Column({primary: true, generated: true})
  id: number;

  @Column()
  company_name: string;

  @Column()
  company_title_description: string;

  @Column()
  company_description: string;

  @Column()
  company_img_description: string;

  @OneToMany(() => Product , product => product.company)
  product : Product[];

  @OneToMany(() => Service , service => service.company)
  service : Service[];
  
}
