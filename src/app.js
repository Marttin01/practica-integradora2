import express from 'express'
import { apiRouter } from './routers/api/apiRouter.js'
import { webRouter } from './routers/web/webRouter.js'
import { engine } from 'express-handlebars'
import cookieParser from 'cookie-parser'
import { COOKIE_SECRET } from './config/authconfig.js'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(express.static('./public'))

app.use('/api',apiRouter)
app.use('/', webRouter)

app.use(cookieParser(COOKIE_SECRET))

app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')