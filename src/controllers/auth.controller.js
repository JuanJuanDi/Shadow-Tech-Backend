const { compareSync } = require("bcrypt");
const UserModel = require("../models/User")
const { findUserByUsername, registerUser } = require("../services/auth.services");
const { generateToken } = require("../config/helpers/jwt.helpers");


async function login(req, res){
    const inputData = req.body

    const userFound = await findUserByUsername(inputData.username);

    if(! userFound){
        return res.json({
            ok: false,
            msg:'Error porfavor registresar porfavor registrese'
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
        username: userFound.username
    }
    const token = generateToken(payload)


    if(inputData)
    res.json({ok: true, token})
}
async function register(req, res){

    const inputData = req.body

    const userFound = await findUserByUsername(inputData.username);
    if(userFound){
        return res.json({
            ok: false,
            msg:'Error al registrar. el usuario ya existe'
        })
    }
    registerUser(inputData)
}

module.exports = {
    login,
    register
}