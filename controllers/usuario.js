const Usuario = require("../models/usuario")
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

//para usarr query =>  ?=
//http://localhost:8080/api/usuarios?=hola&nombre=ivan&pkey=123
const userGet = async (req, res) => {
   const query = req.query
   const usuarios = await Usuario.find({});

   res.json({
      "msj": "get",
      usuarios
   })
}
//const {response}=requiere('express')
const userPost = async (req, res) => {
   const errors = validationResult(req)
   if (!errors.isEmpty()) return res.status(400).json(errors);

   const { nombre, correo, contraseña, rol } = req.body
   const usuario = new Usuario({ nombre, correo, contraseña, rol });
   //verificar si el corro existe
   // const correoExiste = await Usuario.findOne({correo})
   // if (correoExiste){
   //    return res.status(400).json({
   //       "msj": "Este correo ya esta registrado"
   //    })
   // }
   //encriptar pwd
   const salt = bcrypt.genSaltSync();
   usuario.contraseña = bcrypt.hashSync(contraseña, salt);
   //guardar db
   await usuario.save();
   res.json({
      "msj": "Post",
      usuario
   })

}
const userPut = async (req, res) => {
   const errors = validationResult(req)
   if (!errors.isEmpty()) return res.status(400).json(errors);

   const id = req.params.id
   const {contraseña, google, correo, ...resto} = req.body
   //encriptar pwd
   if (contraseña) {
      const salt = bcrypt.genSaltSync();
      //se agrega el correo al resto
      resto.contraseña = bcrypt.hashSync(contraseña, salt);
   }
   //se actualizan todos los campos excepto google, correo
   
   const usuario = await Usuario.findOneAndUpdate(id, resto, { new: true })
   console.log(usuario)
   res.json({
      "msj": "Put",
      id,
      usuario
   })
}


const userDel = (req, res) => {
   res.json({
      "msj": "Delete"
   })
}



module.exports = {
   userGet, userPost, userPut, userDel
}