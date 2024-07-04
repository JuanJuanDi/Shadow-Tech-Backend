const { genSaltSync, hashSync } = require("bcrypt");
const UserModel = require("../models/User");

async function findUserByUsername(email){
    return await UserModel.findOne({email}).populate('role')
}

async function registerUser(newUser){

    try {
        const dbUser = new UserModel(newUser);//.populate('role') 

        const salt = genSaltSync();
        dbUser.password =  hashSync( newUser.password, salt);
        console.log(dbUser)
        const saveUser = await dbUser.save()

        await saveUser.populate('role').execPopulate();

        console.log('usuario guardado exitosmanete', saveUser)

        return saveUser
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    findUserByUsername,
    registerUser
}