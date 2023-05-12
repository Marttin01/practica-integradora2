import { Router } from "express";
import { usersRegisterController } from "../../controllers/api/usersController.js";

export const usersRouter = Router()

usersRouter.post('/register', usersRegisterController)