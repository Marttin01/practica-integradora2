import { UserManager } from "../../managers/userManager.js"
import { generarToken, hashear, validarIgualdad } from "../../utils/criptografia.js"

export async function loginControllerApi (req,res,next){
    try {
        const token = generarToken(req.user)
    
        console.log(token)
        
        res.cookie('authToken', token, {httpOnly: true, signed:true, maxAge:1000 * 60 * 60 * 24})
        
        res.sendStatus(201)
        
    } catch (error) {
        res.status(401)
    }
    // console.log('Paso por aca')
    // console.log(req.user)
}

export async function logoutControllerApi (req,res,next) {
    res.clearCookie('authToken').sendStatus(201)
}

export async function currentController (req,res,next) {
    res.json(req.user)
}