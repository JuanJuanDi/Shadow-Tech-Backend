const { createOneProduct } = require("../services/product.service")

async function createProduct(request, response){

    const newProduct = request.body;
    //aqui voy a invocar el servicio
    try {
        const ProductRegistered = await createOneProduct( newProduct )
        response.json({
            ok: true,
            data: ProductRegistered
            })

    } catch (error) {
        console.log( error );
        response.json({
            ok:false,
            msg:'falla el registro del producto'
        });
    }
}
    

function getProducts(request, response){
    response.json({ msg: 'obtiene todos los productos'})
}

function getProductByid(){}

function updateProductByid(request, response){
    response.json({msg: 'actualiza un producto por su ID'}) //put actualiza todas 
}
function deleteProductByid(request, response){
    response.json({msg: 'eliminar un producto por su ID'})
}

module.exports = {
    createProduct,
    getProducts,
    getProductByid,
    updateProductByid,
    deleteProductByid
};