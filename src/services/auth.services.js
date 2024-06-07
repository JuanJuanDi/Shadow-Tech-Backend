const { genSaltSync, hashSync } = require("bcrypt");
const UserModel = require("../models/User")

async function findUserByUsername( username){
    return await UserModel.findOne({username})
}

function registerUser(newUser){

    const dbUser = new UserModel(newUser)

    const salt = genSaltSync();
    dbUser.password = hashSync( newUser.password, salt);

    dbUser.save();



    res.json({ok: true,msg:'Usuario registrado exitosamente'})
}

module.exports = {
    findUserByUsername,
    registerUser
}