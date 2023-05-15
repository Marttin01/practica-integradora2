import { Router } from "express";
import { currentController, loginControllerApi, logoutControllerApi } from "../../controllers/api/sessionsController.js";
import {autenticacionJwt, loginUserPass } from "../../middlewares/passport.js";

export const sessionsRouter = Router()

sessionsRouter.post('/login', loginUserPass, loginControllerApi)
// loginControllerApi 
sessionsRouter.delete('/logout', logoutControllerApi)

sessionsRouter.get('/current', autenticacionJwt, currentController )