const { createOneCategory, getAllCategorys, getOneCategoryById, upDateOneCategoryById, deleteOneCategoryById} = require("../services/category.services");

async function createCategory(req, res){
    const newCategory = req.body

    try {
        const data = await createOneCategory( newCategory );
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'Error al crear la categoria'
        })
    }
}
async function getcategorys(req, res){
    
    try {
        const data = await getAllCategorys()
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'Error al obtener todas las categorias'
        })
    }
    

}
async function getcategorysById(req, res){
    const id = req.params.id
    try {
        const data = await getOneCategoryById(id)
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'Error al obtener el producto por ID'
        })
    }
    

}
async function upDateCategoryById(req, res){
    const id = req.params.id
    const inputData = req.body
    try {
        const data = await upDateOneCategoryById(id, inputData)
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'Error al modificar el objeto por ID'
        })
    }
    
}
async function deleteCategoryById(req, res){
    const id = req.params.id
    try {
        const data = await deleteOneCategoryById(id)
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'Error al eliminar la categoria por ID'
        })
    }
    
}
module.exports = {
    createCategory,
    getcategorys,
    getcategorysById,
    upDateCategoryById,
    deleteCategoryById

}