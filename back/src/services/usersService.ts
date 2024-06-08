import { AppDataSource } from "../config/data-source";
import { User } from "../entity/User";
import { CredentialService } from "./credentialsService";

export class UserService {
  private userRepository = AppDataSource.getRepository(User);
  private credentialService = new CredentialService();

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async createUser(
    name: string,
    email: string,
    birthdate: Date,
    nDni: string,
    username: string,
    password: string
  ): Promise<User> {
    const credentialsId = await this.credentialService.createCredential(
      username,
      password
    );

    const user = new User();
    user.name = name;
    user.email = email;
    user.birthdate = birthdate;
    user.nDni = nDni;
    user.credentials = { id: credentialsId } as any;

    return this.userRepository.save(user);
  }
}
