import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number; // Definite assignment assertion

  @Column()
  name!: string; // Definite assignment assertion

  @Column()
  email!: string; // Definite assignment assertion

  @Column()
  birthdate!: Date; // Definite assignment assertion

  @Column()
  nDni!: string; // Definite assignment assertion

  @ManyToOne(() => Credential, (credential) => credential.users)
  credentials!: Credential; // Definite assignment assertion

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments!: Appointment[]; // Definite assignment assertion
}
