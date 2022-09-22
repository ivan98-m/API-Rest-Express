const { Router } = require("express");
//const {userGet,userPost}
const { userGet,userPost,userPut,userDel } = require("../controles/usuario");


const router=Router();
module.exports=router;
router.get('/', userGet)
router.post('/', userPost)
router.put('/:id', userPut)
router.delete('/', userDel)