
const userGet=(req, res) => {
   const query = req.query
    res.json({
       "msj":"get",
       query
    })
 }
//const {response}=requiere('express')
const userPost=(req, res) => {
   const body = req.body;
   
    res.json({
       "msj":"Post",
       body
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