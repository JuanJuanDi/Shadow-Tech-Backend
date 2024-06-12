const RoleModel = require('../models/Role');
const UserModel = require('../models/User');
const  jwt = require('jsonwebtoken');

const  verifyToken = async(req , res, next) =>{

    try {
        const token = req.headers["x-access-token"];
        if(!token)return res.json({ok: false, msg: 'no se proporciono el token'})

        const decoded = jwt.verify(token, process.env.SECRET_JWT_SEED)
        req.userId = decoded.id;

        const user = await UserModel.findById(req.userId, {password: 0})

        console.log(user);
        if(!user) return res.json({ok:false, msg:'el ususario no existe '})

        next()
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'no autorizado'
        })
    }
}

const isModerator = async (req, res, next) =>{
    try {
        const user = await UserModel.findById(req.userId).populate('role')
        console.log(user)
        const roles = await RoleModel.find({})
        console.log(roles)

        for(let i = 0; i<roles.length; i++){
            if(roles[i].name == user.role.name){
                next()
                return;
            }
        }
    return res.json({ok:false, msg: 'requiere Admin role'})
    } catch (error) {
        console.error(error)
    }
}

const isAdmin = async ( req, res, next) =>{

}

module.exports = {
    verifyToken,
    isModerator,
    isAdmin
}