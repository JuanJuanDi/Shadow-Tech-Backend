const {Schema, model} = require('mongoose')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required:true,
            unique: true
        },
        password: {
            type:String,
            required: true,

        },
        role:{
            type:String,
            required: true,
            default: 'registered'
        }
    },
    {
        timestamps: true
    }
);

const UserModel = model(
    'Users',
    UserSchema
)

module.exports = UserModel;