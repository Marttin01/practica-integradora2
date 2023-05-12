import bcrypt from 'bcrypt'

export function hashear(palabra) {
    return bcrypt.hashSync(palabra, bcrypt.genSaltSync(10))
}

export function validarIgualdad (recibida,almacenada){
    return bcrypt.compareSync(recibida,almacenada)
}