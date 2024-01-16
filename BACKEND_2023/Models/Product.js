const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter a product name"]

        },

        quantity:{
            type: Number,
            required: true
        },

        price:{
        type:Number,
        required: true,
        },
        image:{
            type: String,
            required: false
        }

    },
{
    timestamps: true
}
)

const ProductModel = mongoose.model('ProductModel', productSchema)
module.exports =  ProductModel;