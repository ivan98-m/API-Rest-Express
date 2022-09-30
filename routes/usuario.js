const { Router } = require("express");
const { check } = require("express-validator");
//const {userGet,userPost}
const { userGet,userPost,userPut,userDel } = require("../controllers/usuario");
const { esRolValido, existeCorreo, existeUsuId } = require("../helpers/db-validators");


const router=Router();
module.exports=router;
router.get('/', userGet)
router.post('/',[
    check('correo','el correo no es valido').isEmail(),
    check('contraseña', 'minimo 6 letras').isLength({min:6}),
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('rol').custom(esRolValido),
    check('correo').custom(existeCorreo),
], userPost)
router.put('/:id',[
    check('id', 'No es un id valido en mongo').isMongoId(),
    check('id').custom(existeUsuId),
    check('rol').custom(esRolValido),
], userPut)
router.delete('/', userDel)