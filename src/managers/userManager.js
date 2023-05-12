import { userModel } from "../models/userModel.js"
import { hashear } from "../utils/criptografia.js"



export class UsersManager{
    constructor(){
        this.usersDb = userModel
    }

    async save(dataUser) {
        // console.log(dataUser)
        let hashUser = {
            ...dataUser,
            password:hashear(dataUser.password)
        }
        // console.log(hashUser)
        let saveUser = await this.usersDb.create(hashUser)
        saveUser = JSON.parse(JSON.stringify(hashUser))
        return saveUser
    }

    async getUsers() {
        let users = await this.usersDb.find().lean()
        return users
    }

    async getUsersById(id) {
        let user = await this.usersDb.findById(id).lean()
        if(!user) throw new Error('Not found')
        return user
    }

    async deleteUserById(id) {
        let deleteUser = await this.usersDb.deleteOne({_id:id})
        if(!deleteUser) throw new Error('Not found')
        return deleteUser
    }

}

export const UserManager = new UsersManager()