import { Router } from "express";
import { usersRegisterController } from "../../controllers/api/usersController.js";
import { rolAuth } from "../../middlewares/rolAuth.js";

export const usersRouter = Router()

usersRouter.post('/register', rolAuth ,usersRegisterController)

