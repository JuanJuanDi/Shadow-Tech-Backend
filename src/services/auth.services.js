const { genSaltSync, hashSync } = require("bcrypt");
const UserModel = require("../models/User");
const { generateToken } = require("../helpers/jwt.helpers");
const RoleModel = require("../models/Role");

async function findUserByUsername( username){
    return await UserModel.findOne({username})
}

async function registerUser(newUser){

    const dbUser = new UserModel(newUser)

    const salt = genSaltSync();
    dbUser.password = hashSync( newUser.password, salt);


    dbUser.save();



    
}

module.exports = {
    findUserByUsername,
    registerUser
}