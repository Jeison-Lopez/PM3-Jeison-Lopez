import express from 'express';
import { getUsers, getUserById, registerUser, loginUser } from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;