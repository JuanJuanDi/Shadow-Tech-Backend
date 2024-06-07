const { genSaltSync, hashSync } = require("bcrypt");
const UserModel = require("../models/User");
const { generateToken } = require("../helpers/jwt.helpers");

async function findUserByUsername( username){
    return await UserModel.findOne({username})
}

function registerUser(newUser){

    const dbUser = new UserModel(newUser)

    const salt = genSaltSync();
    dbUser.password = hashSync( newUser.password, salt);

    dbUser.save();

    const token = generateToken();

    res.json({ok: true,msg:'Usuario registrado exitosamente', token})
}

module.exports = {
    findUserByUsername,
    registerUser
}