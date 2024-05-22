function createProduct(request, response){
    response.json({msg: 'crea un producto nuevo' })
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