const Usuario = require("../models/usuario")
const bcrypt = require("bcryptjs"); 
const { validationResult } = require("express-validator");

//para usarr query =>  ?=
//http://localhost:8080/api/usuarios?=hola&nombre=ivan&pkey=123
const userGet= async (req, res) => {
   const query = req.query
   const usuarios = await Usuario.find({});

    res.json({
      "msj":"get",
      usuarios
    })
 }
//const {response}=requiere('express')
const userPost= async (req, res) => {
   const {nombre, correo, contraseña, rol} = req.body
   const errors = validationResult(req)
   if (!errors.isEmpty())  return res.status(400).json(errors);
   const usuario = new Usuario({nombre, correo, contraseña, rol});
   //verificar si el corro existe
   const correoExiste = await Usuario.findOne({correo})
   if (correoExiste){
      return res.status(400).json({
         "msj": "Este correo ya esta registrado"
      })
   }
   //encriptar pwd
   const salt = bcrypt.genSaltSync();
   usuario.contraseña = bcrypt.hashSync(contraseña, salt);
   //guardar db
   await usuario.save();
    res.json({
       "msj":"Post",
       usuario
    })


 }
 const userPut=(req, res) => {
   const id = req.params.id
    res.json({
       "msj":"Put",
       "id": id
    })
 }
 const userDel=(req, res) => {
    res.json({
       "msj":"Delete"
    })
 }



module.exports={
    userGet,userPost,userPut,userDel
 }