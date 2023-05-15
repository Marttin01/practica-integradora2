import { UserManager } from "../../managers/userManager.js";
import { generarToken } from "../../utils/criptografia.js";

export async function usersRegisterController(req,res,next){
    try {
        // console.log(req.body)
        let user = await UserManager.save(req.body)
        // console.log(user)
        const token = generarToken(user)
        res.cookie('authToken', token, {httpOnly: true, signed:true, maxAge:1000 * 60 * 60 * 24})
        

        res.sendStatus(201)
        
    } catch (error) {
        res.status(400)
    }
}