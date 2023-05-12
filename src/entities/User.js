import { hashear } from "../utils/criptografia.js";

export class User {
    constructor(first_name,last_name,age,email,password){
        this._first_name = first_name,
        this._last_name = last_name,
        this._age = age,
        this._email = email,
        this._password = hashear(password)
    }

    get email(){ return this.email }
    get password(){ return this.password }
    get first_name(){ return this.first_name }

    datos(){
        return {
            first_name: this._first_name,
            last_name: this._last_name,
            age: this._age,
            email: this._email,
            password: this._password
        }
    }
}