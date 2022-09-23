const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config.db');

class Server{
    constructor(){
        this.app=express();
        this.port = process.env.PORT
        //CONECTA DB
        this.conectarDB();
        //middleware
        this.middleware();
        //rutas
        this.routes();

    }
    middleware(){
        this.app.use(express.static("public"))
        this.app.use(cors());
        this.app.use(express.json());
    }

    async conectarDB(){
        await dbConnection();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }

    routes(){
        this.app.use('/api/usuarios',require('../routes/usuario'))
    }
}

module.exports=Server;