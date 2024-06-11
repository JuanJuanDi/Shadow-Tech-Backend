const { CreateOneRole, getAllRole, deleOneRoleById } = require("../services/role.services");

async function createRole(req, res){
    const newRole = req.body

    try {
        const data = await CreateOneRole( newRole );
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'Error al crear el Rol'
        })
    }
}

async function getRole(req, res){
    try{
        const data = await getAllRole()
        res.json({
            ok:true,
            data
        })
    } catch(error){
        console.error(error)
        res.json({
            ok: false,
            msg:'Error al obtener las categorias'
        })
    }
}

async function deleteRoleById(req, res){
    const id = req.params.id
    try {
        const data = await deleOneRoleById( id );
        res.json({
            ok:true,
            data
        })

    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'Error al eliminar el Role'
        })
    }
}

module.exports = {
    createRole,
    getRole,
    deleteRoleById
}