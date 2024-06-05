const { Schema, model } = require("mongoose")

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String
})

const categoryModel = model(
    'category',
    categorySchema
);

module.exports = categoryModel