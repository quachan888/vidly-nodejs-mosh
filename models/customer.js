const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model(
    'Customer',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlenght: 3,
            maxlenght: 50
        },
        isGold: {
            type: Boolean,
            default: false
        },
        phone: {
            type: String,
            required: true,
            minlenght: 3,
            maxlenght: 50
        }
    })
);

const validateCustomer = (customer) => {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    };
    return Joi.validate(customer, schema);
};

exports.Customer = Customer;
exports.validate = validateCustomer;
