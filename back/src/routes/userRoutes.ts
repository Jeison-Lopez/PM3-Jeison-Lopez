import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  registerUser,
  login,
} from "../controllers/userController";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/register", registerUser);
router.post("/login", login);

export default router;
