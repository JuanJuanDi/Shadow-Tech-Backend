const { compareSync } = require("bcrypt");
const { findUserByUsername, registerUser } = require("../services/auth.services");
const { generateToken } = require("../helpers/jwt.helpers");




async function login(req, res){
    const inputData = req.body
    try {
        const userFound = await findUserByUsername(inputData.email);

        if(! userFound){
            return res.json({
                ok: false,
                msg:'Error porfavor registrese'
            })
        }
        const isValiedPassword = compareSync(inputData.password, userFound.password);

        if( ! isValiedPassword){
            res.json({
                ok: false,
                msg: 'password invalido'
            })
        }
        const payload = {
            id: userFound.id,
            username: userFound.username,
            email:userFound.email
        }
        const token = generateToken(payload)

        // const token = jwt.sing({id: userFound, username: userFound, email:userFound}, process.env.SECRET_JWT_SEED,)
        if(inputData)
        res.json({ok: true, msg:'iniciando secion', token})
    } catch (error) {
        
    }

}
async function register(req, res){
    const inputData = req.body

    try {
        const userFound = await findUserByUsername(inputData.email);
        
        if(userFound){
            return res.json({
                ok: false,
                msg:'Error al registrar. el usuario ya existe'
            })
        }
        
        if(req.body.role){
            const foundRole = await RoleModel.find({name: {$in:req.body.role}})
            inputData.role = foundRole.map(role => role._id)
        }else{
            const role = await RoleModel.findOne({name: "User"})
            inputData.role = [role._id];
        }

        console.log(inputData)
        registerUser(inputData)

        const payload = {
            id: inputData.id,
            username: inputData.username,
            email:inputData.email
        }
        const token = generateToken(payload);

        res.json({ok: true,msg:'Usuario registrado exitosamente', token })

    } catch (error) {
    console.error(error)
    res.json({
        ok:false,
        msg:'Error al registrar el usuario'
    })    
    }
    
}


// const renewToken = ( req, res ) => {
//     const userData = req.authUser
//     const {id} = userData

//     delete userData.iat;
//     delete userData.exp;

//     const userFound = UserModel.findById( id );

//     if(! userFound){
//         res.json({
//             ok: false,
//             msg: 'el ususario no existe no genere el token'
//         });
//     }
    
//     const newToken = generateToken({ ...userData});

//     resjson({
//         ok:true,
//         token: newToken,
//         userData
//     })
// }

module.exports = {
    login,
    register,
    // renewToken
    
}