import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User";

@Entity()
export class Credential {
  @PrimaryGeneratedColumn()
  id!: number; // Definite assignment assertion

  @Column()
  username!: string; // Definite assignment assertion

  @Column()
  password!: string; // Definite assignment assertion

  @OneToMany(() => User, (user) => user.credentials)
  users!: User[]; // Definite assignment assertion
}
