const categoryModel = require("../models/category");

async function createOneCategory( newCategory){
    return await categoryModel.create( newCategory);
}
async function getAllCategorys(){
    return await categoryModel.find();
}
async function getOneCategoryById(idCategory){
    return await categoryModel.find({_id: idCategory})
}
async function upDateOneCategoryById(idCategory, update){
    return await categoryModel.findOneAndUpdate({_id: idCategory}, update, {new: true})
}
async function deleteOneCategoryById(id){
    return await categoryModel.findByIdAndDelete(id)
}

module.exports = {
    createOneCategory,
    getAllCategorys,
    getOneCategoryById,
    upDateOneCategoryById,
    deleteOneCategoryById
}
