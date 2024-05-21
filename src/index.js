const express = require( 'express' );
const app = express();

    //ruta, callback
app.get( '/', function( request, response ){
    const data = {
        message: 'Bienvenido a mi web'
    }

    response.json(data);
});
app.get( '/api/user', function(request, response){
    response.json([
        {nombre:'Maria Alejandra', genero: 'Femenino'},
        {nombre:'Nidia', genero: 'Femenino'},
        {nombre:'Laura', genero: 'Femenino'},
        {nombre:'Natalia', genero: 'Femenino'}
    ]);
} );
           //purto, callback
app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
});