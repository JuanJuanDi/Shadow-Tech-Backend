const mongoose = require('mongoose')

async function dbConnection(){

    try {
        await mongoose.connect('mongodb://localhost:27017/shop', {})
        console.log('Base de datos inicializada exitosamente')
    
    } catch (error) {
        console.log(error)// mensaje para el desarrollador 
        throw new Error(' Error al inicializar la base de datos')    
    }
}

module.exports = {
    dbConnection
}