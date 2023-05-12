export function usersController (req,res,next){
    res.render('users', {
        pageTitle:'Users',
        user:''
    })
}

export function registerController (req,res,next){
    res.render('register', {
        pageTitle:'Register'
    })
}