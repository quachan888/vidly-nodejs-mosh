const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const morgan = require('morgan');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

mongoose
    .connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to DB!'))
    .catch((err) => console.log('Could not connect to DB. ERROR: ', err));

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);

const PORT = 3000;
const URL = 'http://localhost';

app.listen(PORT, () => {
    console.log(`Server is running at ${URL}:${PORT}...`);
});
