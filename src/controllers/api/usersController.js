import { UserManager } from "../../managers/userManager.js";

export async function usersRegisterController(req,res,next){
    try {
        // console.log(req.body)
        let user = await UserManager.save(req.body)
        console.log(user)
        
    } catch (error) {
        res.json(error)
    }
}