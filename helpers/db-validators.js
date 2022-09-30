const Role = require("../models/role")
const Usuario = require("../models/usuario")

const esRolValido = async (rol='') => {
    const existeRol = await Role.findOne({rol})
    if(!existeRol){
        throw new Error(`el rol ${rol} no esta en la DB`)
    }
}

//verificar si el corro existe
const existeCorreo = async(correo='') => {
    const correoExiste = await Usuario.findOne({correo})
    if(correoExiste){
        throw new Error(`El correo ${correo} ya esta registrado en la db`)
    }
}

const existeUsuId = async (id) => {
    const existeUsuario = await Usuario.findById(id)
    if(!existeUsuario ){
        throw new Error(`El usuario con id:${id} no existe`)
    }
}

module.exports={esRolValido, existeCorreo, existeUsuId}