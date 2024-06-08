import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Appointment } from "../entity/Appointment";
import { Credential } from "../entity/Credential";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "J31s0n/L0p3zP10",
  database: "typeorm",
  synchronize: true,
  logging: true,
  entities: [User, Appointment, Credential],
  subscribers: [],
  migrations: [],
});
