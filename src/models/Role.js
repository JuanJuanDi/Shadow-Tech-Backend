const { Schema, model } = require("mongoose")

const RoleSchema = new Schema(
    {
    name: {
        type:String,
        unique: true
    }
})

const RoleModel = model(
    'Role',
    RoleSchema
);

module.exports = RoleModel; 