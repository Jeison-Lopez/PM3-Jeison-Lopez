import { Request, Response } from "express";
import {
  registerUserService,
  loginUserByCredentialId,
  getAllUsersService,
  getUserByIdService,
} from "../services/usersService";
import { User } from "../entities/User";
import { UserDto } from "../dtos/user.dto";
import { CredentialDto } from "../dtos/credential.dto";
import { ICredential } from "../interfaces/ICredentail";
import { validateCredential } from "../services/credentialsService";

// Controlador para obtener todos los usuarios
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

// Controlador para obtener un usuario por su ID
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

// Controlador para registrar un nuevo usuario
export const registerUser = async (
  req: Request<{}, {}, UserDto>,
  res: Response
) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: User = await registerUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });
    res.status(201).json({ message: "Usuario creado con éxito" });
  } catch (error) {
    res.status(400).json({ message: "Error creating user" });
  }
};

// Controlador para iniciar sesión
export const login = async (
  req: Request<{}, {}, CredentialDto>,
  res: Response
) => {
  try {
    const { username, password } = req.body;
    const credential: ICredential = await validateCredential({
      username,
      password,
    });
    if (credential && credential.id) {
      const user = await loginUserByCredentialId(credential.id);
      res.status(200).json({
        login: true,
        user,
      });
    } else {
      throw new Error("Credenciales incorrectas");
    }
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
