const {
    Schema,// define la estructura de los documentos que se van a guardar en una collection
    model//Asocia la estructura al nombre de una collection
} = require( 'mongoose' ); 


//instanciamos el Schema de mongoose para definir la estructura de datos y el modelo
const ProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description: String,

    price:{
        type: Number,
        default: 0
    },
    quantity:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true,
        default:'non-category'
    },
    urlImage:{
        type: String
    },
    userId:{
        type: String,
        required: false // TODO: volverlo obligatorio cuando el sistema de autenticacion este terminado
    }
    
},{
    timestamps: true
});

//Asocia el modelo definido para la collection en la base de datos
const ProductModel = model(
    'Product',          //nomnbre de la entidad(collection en la base de datos
    ProductSchema
);

module.exports = ProductModel;      //Exponemos el modelo de datos