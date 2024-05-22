const { Router } = require( 'express' ); //importamos el router de express 
const { createProduct, getProducts, updateProductByid, deleteProductByid } = require('../controllers/product.controller');
const router = Router();                 //imvocamos el router de express

// definir las rutas para la entidad 'product'

//C: Create ->http://locahost:3000/apis/product/
router.post('/', createProduct)
//R: Read ->http://locahost:3000/apis/product/


router.get('/',getProducts);

//U: Update ->http://locahost:3000/apis/product/<espera-por-ID>
router.put('/:id',updateProductByid)


router.patch('/:id',(request, response)=>{
    response.json({msg: 'actualiza un producto por su ID'})// patch actualiza algunas 
})

//D: Delete ->http://locahost:3000/apis/product/<espera-por-ID>
router.delete('/:id',deleteProductByid)


module.exports = router;    //exportar todas las rutas disponibles para toda la aplicacion