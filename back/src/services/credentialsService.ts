import { CredentialDto } from "../dtos/credential.dto";
import { ValidateDto } from "../dtos/validate.dto";
import { Credential } from "../entities/Credential";
import { credentialModel } from "../repositories";

// Función para crear una nueva credencial
export const createCredential = async (
  createCredentialDto: CredentialDto
): Promise<Credential> => {
  const newCredential: Credential = credentialModel.create(createCredentialDto);
  await credentialModel.save(newCredential);
  return newCredential;
};

export const validateCredential = async (
  validateCredentialDto: ValidateDto
): Promise<Credential> => {
  const { username, password } = validateCredentialDto;
  const foundCredential: Credential | null = await credentialModel.findOneBy({
    username,
  });

  if (!foundCredential) throw new Error("Credenciales incorrectas");
  if (password !== foundCredential.password)
    throw new Error("Credenciales incorrectas");

  return foundCredential;
};
