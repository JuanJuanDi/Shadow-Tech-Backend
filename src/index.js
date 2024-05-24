const express = require( 'express' );
const app = express();
const {dbConnection} = require('./config/mongo.confing'); //importamos la configuracion de mongoose para mongo

app.use( express.json());
//ruta, importacion
        //->http://locahost:3000/apis/product/
app.use('/api/products' , require('./routes/product.routes'))

// invoca la configuracion de la base de datos para establecer la configuracion     
dbConnection()

           //purto, callback
app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
});