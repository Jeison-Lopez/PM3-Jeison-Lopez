import { AppDataSource } from "../config/data-source";
import { Credential } from "../entity/Credential";

export class CredentialService {
  private credentialRepository = AppDataSource.getRepository(Credential);

  async createCredential(username: string, password: string): Promise<number> {
    const credential = new Credential();
    credential.username = username;
    credential.password = password;

    const savedCredential = await this.credentialRepository.save(credential);
    return savedCredential.id;
  }

  async validateCredential(
    username: string,
    password: string
  ): Promise<number | null> {
    const credential = await this.credentialRepository.findOneBy({ username });

    if (credential && credential.password === password) {
      return credential.id;
    }

    return null;
  }
}
