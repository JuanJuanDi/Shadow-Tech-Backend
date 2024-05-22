const express = require( 'express' );
const app = express();
        //ruta, importacion
        //->http://locahost:3000/apis/product/
app.use('/api/products' , require('./routes/product.routes'))


           //purto, callback
app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
});