// src/services/usersService.ts
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import Credential from "../entities/Credential";
import { ICreateDtio } from "../dtos/ICreateDto";
import { userModel } from "../repositories";
import { createCredential } from "./credentialsService";

export const getAllUsersService = async (): Promise<User[]> => {
  const allUsers: User[] = await userModel.find({
    relations: { appointments: true },
  });
  return allUsers;
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
  const user: User | null = await userModel.findOne({
    where: { id },
    relations: ["appointments"],
  });
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

export const createUserService = async (createUserDto: ICreateDtio) => {
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

export const findUserByCredentialId = async (credentialId: number) => {
  const user: User | null = await userModel.findOneBy({
    credential: { id: credentialId },
  });
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};
