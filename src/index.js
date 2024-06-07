const express = require( 'express' );
const app = express();
const cors = require( 'cors' )
const {dbConnection} = require('./config/mongo.confing'); //importamos la configuracion de mongoose para mongo

const PORT = process.env.PORT

app.use( express.json());
app.use( cors() );
//ruta, importacion
        //->http://locahost:3000/apis/product/
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/products' , require('./routes/product.routes'))
app.use('/api/categorys', require('./routes/category.routes'))


// invoca la configuracion de la base de datos para establecer la configuracion     
dbConnection()

           //purto, callback
app.listen( PORT, function(){
    console.log(`servidor corriendo en http://localhost:${PORT}`)
});