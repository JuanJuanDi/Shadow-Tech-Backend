const ProductModel = require("../models/Product");

async function createOneProduct( newProduct ){
    return await ProductModel.create( newProduct );
    
}
async function getAllProduct(){}
async function updateOneProduct(){}
async function removeOneProduct(){}


module.exports = {
    createOneProduct,
    getAllProduct,
    updateOneProduct,
    removeOneProduct
};