const Joi = require('joi');
const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Drawings', 'Sketches', 'Paintings'],
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: { // New field added
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

// Compile the Product model using the productSchema
const Product = mongoose.model('Product', productSchema);
// Validation function using Joi
function validateProduct(product) {
    const schema = Joi.object({
        category: Joi.string().valid('Drawings', 'Sketches', 'Paintings').required(),
        item_name: Joi.string().min(1).max(255).required(),
        description: Joi.string().min(1).required(),
        quantity: Joi.number().min(1).required(), // Updated to minimum 1 character
        price: Joi.string().min(1).required()
    });

    return schema.validate(product);
}

module.exports = {
    Product,
    validateProduct
};
