import { Request, Response } from "express";
import { UserService } from "../services/usersService";

const userService = new UserService();

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.getUserById(Number(id));
  res.json(user);
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  const newUser = await userService.createUser(
    name,
    email,
    new Date(birthdate),
    nDni,
    username,
    password
  );
  res.json(newUser);
};

export const loginUser = async (req: Request, res: Response) => {
  // Implement login logic
};
