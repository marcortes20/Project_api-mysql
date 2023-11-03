import { Company } from "src/companies/entities/company.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity("menuoptions")
export class MenuOption {

  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Company, company => company.menuOptions, {
    // cascade: true,
    eager: true, // para que traiga los company  al hacer un findOne
  })
  company: Company;

}
