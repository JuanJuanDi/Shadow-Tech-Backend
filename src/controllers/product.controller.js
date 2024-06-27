const { createOneProduct, getAllProduct, getOneProductById, removeOneProduct, updateOneProduct } = require("../services/product.service")

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
            msg:'falla al registrar el producto'
        });
    }
}

async function getProducts(request, response){

    try {
        const product = await getAllProduct()
        response.json({
            ok: true,
            data: product

        })
    } catch (error) {
        console.error(error)
        response.json({
            ok: false,
            msg:'Error al optener todos los productos'
        })
    }
    
}
async function getProductById(request, response){
    const id = request.params.id; 

    try {
        const data = await getOneProductById(id)// con esto estoy cacturando el aid del producto que biene cona la url
        
        response.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error)
        response.json({
            ok: false,
            msg:'Error al optener un producto por su ID'
        });
    }
    
}

async function updateProductByid(request, response){
    const id = request.params.id
    const inputData = request.body
    try {
        const data = await updateOneProduct(id, inputData)
        response.json({
            ok: true,
            data
        }) 
    } catch (error) {
        console.error(error)
        response.json({
            ok:false,
            msg: 'No se pudo actualizar el producto por ID'
        })
    }
}
async function deleteProductByid(request, response){
        const id = request.params.id;
    
        try {
        const data = await removeOneProduct(id)

        response.json({
            ok: true,
            data
        })
        } catch (error) {
            console.error(error)
                response.json({
                    ok: false,
                    msg: 'Error al eliminar un producto por ID'
                }
            )
        }
    
}

module.exports = {
    createProduct,
    getProducts,
    updateProductByid,
    deleteProductByid,
    getProductById
};