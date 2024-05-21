const express = require( 'express' );
const app = express();

    //ruta, callback
app.get( '/', function( request, response ){
    const homepage = `<h1>home page</h1>
    <p>esta es la pagina de inicio de la tienda virtual</p>`
    response.send( homepage);
});
app.get( '/contactenos', function(request, response){
    response.send(`<h1>contact page</h1>
    <form>
        <label>
            Nombre
        </label>
        <input />
        <button>send</button>
    </form>`
);
} );
           //purto, callback
app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
});