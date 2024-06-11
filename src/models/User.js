const {Schema, model} = require('mongoose')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required:true,
            unique: true
        },
        email:{
            type:String,
            unique:true,
            require: true
        },
        password: {
            type:String,
            required: true,

        },
        role:[{
            ref:"Role",
            type:Schema.Types.ObjectId
        }]
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