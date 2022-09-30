const {Schema, model} = require("mongoose");

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required : [true, "el nombre debe ser obligtorio"],
    },
    correo:{
        type: String,
        required : [true, "el correo debe ser obligtorio"],
        unique: true
    },
    contraseña: {
        type: String,
        required : [true, "la contraseña debe ser obligtorio"],  
    },
    estado: {
        type: Boolean,
        default: true  
    },
    rol: {
        type: String,
        required: true ,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    google: {
        type: Boolean,
        default: false  
    }
})

UsuarioSchema.methods.toJSON = function () {
    const {contraseña, __v, ...varUsuarios} = this.toObject()
    return varUsuarios;
}
module.exports = model ('Usuario', UsuarioSchema)