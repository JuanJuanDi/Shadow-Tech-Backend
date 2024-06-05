const ProductModel = require("../models/Product");

async function createOneProduct( newProduct ){
    return await ProductModel.create( newProduct );
    
}
async function getAllProduct(){
    return await ProductModel.find()
}
async function getOneProductById(idProduct){
    return await ProductModel.find({ _id: idProduct})
}
async function updateOneProduct(idProduct ,updateProduct){
    return await ProductModel.findOneAndUpdate({_id: idProduct},updateProduct,{new: true})
}
async function removeOneProduct(idProduct){
    return await ProductModel.findByIdAndDelete(idProduct)
}


module.exports = {
    createOneProduct,
    getAllProduct,
    updateOneProduct,
    removeOneProduct,
    getOneProductById
}