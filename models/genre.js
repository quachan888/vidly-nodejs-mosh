const mongoose = require('mongoose');
const Joi = require('joi');

const Genre = mongoose.model(
    'Genre',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlenght: 3,
            maxlenght: 50
        }
    })
);

const validateGenre = (genre) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(genre);
};

exports.validate = validateGenre;
exports.Genre = Genre;
