const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION, {
        })
        console.log('conexion exitosa')
    } catch (error) {
        console.log('Error al iniciar la DB', error)
        throw new error('Error al iniciar la DB')
    }
}

module.exports = {
    dbConnection
}