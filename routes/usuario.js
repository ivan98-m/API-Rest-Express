const { Router } = require("express");
const { check } = require("express-validator");
//const {userGet,userPost}
const { userGet,userPost,userPut,userDel } = require("../controllers/usuario");
const { esRolValido } = require("../helpers/db-validators");


const router=Router();
module.exports=router;
router.get('/', userGet)
router.post('/',[
    check('correo','el correo no es valido').isEmail(),
    check('contraseña', 'minimo 6 letras').isLength({min:6}),
    check('rol').custom(esRolValido)
], userPost)
router.put('/:id', userPut)
router.delete('/', userDel)