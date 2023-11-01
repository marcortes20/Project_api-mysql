import { Company } from "src/companies/entities/company.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity("categories")
export class Category {

  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  img: string;

  @ManyToOne(() => Company, company => company.id, {
    // cascade: true,
    eager: true, // para que traiga los company  al hacer un findOne
  })
  company: Company;


}
