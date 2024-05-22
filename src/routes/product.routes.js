const { Router } = require( 'express' ); //importamos el router de express 
const router = Router();                 //imvocamos el router de express

// definir las rutas para la entidad 'product'

//C: Create ->http://locahost:3000/apis/product/
router.post('/', (request, response)=>{
    response.json({msg: 'crea un producto nuevo' })
})
//R: Read ->http://locahost:3000/apis/product/
router.get('/',(request, response)=>{
    response.json({ msg: 'obtiene todos los productos'})
});
//U: Update ->http://locahost:3000/apis/product/<espera-por-ID>
router.put('/:id',(request, response)=>{
    response.json({msg: 'actualiza un producto por su ID'}) //put actualiza todas 
})
router.patch('/:id',(request, response)=>{
    response.json({msg: 'actualiza un producto por su ID'})// patch actualiza algunas 
})

//D: Delete ->http://locahost:3000/apis/product/<espera-por-ID>
router.delete('/:id',(request, response)=>{
    response.json({msg: 'eliminar un producto por su ID'})
})


module.exports = router;    //exportar todas las rutas disponibles para toda la aplicacion