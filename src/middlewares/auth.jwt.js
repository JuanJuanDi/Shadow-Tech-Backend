const UserModel = require('../models/User');
const  jwt = require('jsonwebtoken');

const  verifyToken = async(req , res, next) =>{

    try {
        const token = req.headers["x-access-token"]; 
        console.log('hola desde el middleware')
        if(!token)return res.json({ok: false, msg: 'no se proporciono el token'})

        const decoded = jwt.verify(token, process.env.SECRET_JWT_SEED)
        console.log('hola desde el middleware otra vez')
        req.userId = decoded.id;
        
        const user = await UserModel.findById(req.userId, {password: 0})
        console.log(user);
        if(! user) return res.json({ok:false, msg:'el ususario no existe '})

        next()
    } catch (error) {
        console.error(error)
        res.json({
            ok:false,
            msg:'no autorizado'
        })
    }

}

module.exports = {
    verifyToken
}