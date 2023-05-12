import { Router } from "express";
import { loginController, registerController, usersController } from "../../controllers/web/webController.js";

export const webRouter = Router()

webRouter.get('/users', usersController)

webRouter.get('/register', registerController)

webRouter.get('/login', loginController)