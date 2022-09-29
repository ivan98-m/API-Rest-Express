const Role = require("../models/role")

const esRolValido = async (rol='') => {
    const existeRol = await Role.findOne({rol})
    if(!existeRol){
        throw new Error(`el rol ${rol} no esta en la DB`)
    }
}

module.exports={esRolValido}