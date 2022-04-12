import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Store {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  typePeople: string;

  @Column("varchar")
  cpf: string;

  @Column("varchar")
  cnpj: string;

  @Column("simple-array")
  images: string[];

  @Column("simple-array")
  documents: string[];
}
