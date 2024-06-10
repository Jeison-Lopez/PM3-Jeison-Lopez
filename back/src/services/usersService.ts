import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { UserDto } from "../dtos/user.dto";
import { userModel } from "../repositories";
import { createCredential } from "./credentialsService";

// Servicio para obtener todos los usuarios
export const getAllUsersService = async (): Promise<User[]> => {
  const allUsers: User[] = await userModel.find({
    relations: { appointments: true },
  });
  return allUsers;
};

// Servicio para obtener un usuario por su ID
export const getUserByIdService = async (id: number): Promise<User | null> => {
  const user: User | null = await userModel.findOne({
    where: { id },
    relations: ["appointments"],
  });
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

// Servicio para crear un nuevo usuario
export const registerUserService = async (createUserDto: UserDto) => {
  const newCredential: Credential = await createCredential({
    username: createUserDto.username,
    password: createUserDto.password,
  });
  const newUser: User = userModel.create(createUserDto);
  await userModel.save(newUser);
  newUser.credential = newCredential;
  await userModel.save(newUser);
  return newUser;
};

export const loginUserByCredentialId = async (
  credentialId: number
): Promise<User | null> => {
  if (isNaN(credentialId)) {
    throw new Error("ID de credencial inválido");
  }

  const user: User | null = await userModel.findOneBy({
    credential: { id: credentialId },
  });
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};
