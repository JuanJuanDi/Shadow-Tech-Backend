const RoleModel = require("../models/Role")

async function CreateOneRole( newRole ){
    return await RoleModel.create( newRole)
}

async function  getAllRole(){
    return await RoleModel.find()
}
async function deleOneRoleById(idProduct){
    return await RoleModel.findByIdAndDelete(idProduct)
}

module.exports = {
    CreateOneRole,
    getAllRole,
    deleOneRoleById
}