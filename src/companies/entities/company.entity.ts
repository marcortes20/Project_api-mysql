import { Category } from "src/categories/entities/category.entity";
import { MenuOption } from "src/menu-options/entities/menu-option.entity";
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

  @Column("text")
  company_description: string;

  @Column()
  company_img_description: string;

  @OneToMany(() => Product , products => products.company)
  products : Product[];

  @OneToMany(() => Service , services => services.company)
  services : Service[];

  @OneToMany(() => Category , categories => categories.company)
  categories : Category[];

  @OneToMany(() => MenuOption , menuOptions => menuOptions.company)
  menuOptions : MenuOption[];
  
}
