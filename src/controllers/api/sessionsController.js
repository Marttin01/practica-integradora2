import { UserManager } from "../../managers/userManager.js"
import { validarIgualdad } from "../../utils/criptografia.js"

export async function loginController (req,res,next){
    const credentials = req.body
    try {
        const usuario = await UserManager.getUsersByEmail(credentials.email)
        if(!validarIgualdad(credentials.password,usuario.password)){
            throw new Error('Login failed')
        }

        const token = generarToken(usuario)
        res.cookie('authToken', token, {httpOnly: true, signed:true, maxAge:1000 * 60 * 60 * 24})
        res.sendStatus(201)

    } catch (error) {
        res.status(401).send({error:'Not found'})
    }
}