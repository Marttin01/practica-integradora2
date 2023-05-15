import express from 'express'
import cookieParser from 'cookie-parser'
import { apiRouter } from './routers/api/apiRouter.js'
import { webRouter } from './routers/web/webRouter.js'
import { engine } from 'express-handlebars'
import { COOKIE_SECRET } from './config/authconfig.js'
import { extraerCredenciales } from './middlewares/auth.js'
import passport from 'passport'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(express.static('./public'))

app.use(cookieParser(COOKIE_SECRET))
app.use(extraerCredenciales)
app.use(passport.initialize())

app.use('/api',apiRouter)
app.use('/', webRouter)


app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')