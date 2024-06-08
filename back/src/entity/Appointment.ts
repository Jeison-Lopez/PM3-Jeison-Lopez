import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id!: number; // Definite assignment assertion

  @Column()
  date!: Date; // Definite assignment assertion

  @Column()
  time!: string; // Definite assignment assertion

  @Column()
  status!: string; // Definite assignment assertion

  @ManyToOne(() => User, (user) => user.appointments)
  user!: User; // Definite assignment assertion
}
