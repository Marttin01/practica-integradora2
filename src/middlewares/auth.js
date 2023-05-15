import { decodificarToken } from "../utils/criptografia.js"

export function extraerCredenciales (req,res,next) {
    try {
        if(!req.signedCookies['authToken']) {
            next()
        }else{
            const token = req.signedCookies['authToken']
            console.log(token)
            console.log('el token')
    
            const dataUser = decodificarToken(token)
            console.log(dataUser)
            
            req.credentials = dataUser
            next()
        }    
    } catch (error) {
        next()
    }
}

export function soloAutenticadosApi (req,res,next) {
    if(!req.credentials){
        throw Error('Not autenticated')
    }
    next()
}

export function soloAutenticadosWeb (req,res,next) {
    if(!req.credentials){
        res.redirect('/login')
    }
    next()
}