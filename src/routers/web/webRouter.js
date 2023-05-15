import { Router } from "express";
import { loginController, profileController, registerController, usersController } from "../../controllers/web/webController.js";
import { soloAutenticadosWeb } from "../../middlewares/auth.js";
import { usersAuth } from "../../middlewares/usersAuth.js";

export const webRouter = Router()

webRouter.get('/users', usersAuth ,usersController)

webRouter.get('/register', registerController)

webRouter.get('/login', loginController)

webRouter.get('/profile', soloAutenticadosWeb ,profileController)