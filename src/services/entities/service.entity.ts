import { Company } from "src/companies/entities/company.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity("services")
export class Service {

  @Column({primary: true, generated: true})
  id: number;

  @Column()
  title: string;

  @Column()
  desccription: string;

  @Column()
  icon: string;

  @ManyToOne(() => Company, company => company.id, {
    // cascade: true,
    eager: true, // para que traiga las raza al hacer un findOne
  })
  company: Company;

}
