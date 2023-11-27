const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [false, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: false,
            default: 0
        },
        price: {
            type: Number,
            required: false,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;