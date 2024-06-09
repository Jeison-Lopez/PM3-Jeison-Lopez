import { Request, Response } from "express";
import {
  createUserService,
  findUserByCredentialId,
  getAllUsersService,
  getUserByIdService,
} from "../services/usersService";
import { User } from "../entities/User";
import { ICreateDtio } from "../dtos/ICreateDto";
import { ICreateCredentialDto } from "../dtos/ICredentialDto";
import { ICredential } from "../interfaces/ICredentail";
import { validateCredential } from "../services/credentialsService";
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getAllUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getUserById = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const user: User | null = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const registerUser = async (
  req: Request<{}, {}, ICreateDtio>,
  res: Response
) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: User = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Error creating user" });
  }
};

export const login = async (
  req: Request<{}, {}, ICreateCredentialDto>,
  res: Response
) => {
  try {
    const { username, password } = req.body;
    const credential: ICredential = await validateCredential({
      username,
      password,
    });
    const user = await findUserByCredentialId(credential.id);
    res.status(200).json({
      loggin: true,
      user,
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};
