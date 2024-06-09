import { AppDataSource } from "../config/data-source";
import { ICreateCredentialDto } from "../dtos/ICredentialDto";
import { IValidateCredentialDto } from "../dtos/IValidateCredentialDto";
import Credential from "../entities/Credential";
import { credentialModel } from "../repositories";

export const createCredential = async (
  createCredentialDto: ICreateCredentialDto
): Promise<Credential> => {
  const newCredential: Credential = credentialModel.create(createCredentialDto);
  await credentialModel.save(newCredential);
  return newCredential;
};

export const validateCredential = async (
  validateCredentialDto: IValidateCredentialDto
): Promise<Credential> => {
  const { username, password } = validateCredentialDto;
  const foundCredential: Credential | null = await credentialModel.findOneBy({
    username,
  });

  if (!foundCredential) throw new Error("Credenciales incorrectas");
  if (password !== foundCredential?.password)
    throw new Error("Credenciales incorrectas");

  return foundCredential;
};
