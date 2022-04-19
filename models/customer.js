const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model(
    'Customer',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlenght: 2,
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
    const schema = new Joi.object({
        name: Joi.string().min(2).max(50).required(),
        phone: Joi.string().min(8).max(50).required(),
        isGold: Joi.boolean()
    });
    return schema.validate(customer);
};

exports.Customer = Customer;
exports.validate = validateCustomer;
