import { Router } from "express"
import { usersRouter } from "./usersRouter.js"



export const apiRouter = Router()

apiRouter.use('/users', usersRouter)