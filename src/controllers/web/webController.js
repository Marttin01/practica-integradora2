import { UserManager } from "../../managers/userManager.js"

export async function usersController (req,res,next){

    const users = await UserManager.getUsers()

    res.render('users', {
        pageTitle:'Users',
        hayUsers: users.length > 0,
        users
    })
}

export function registerController (req,res,next){
    res.render('register', {
        pageTitle:'Register'
    })
}

export function loginController (req,res,next) {
    res.render('login', {
        pageTitle:'Login'
    })
}