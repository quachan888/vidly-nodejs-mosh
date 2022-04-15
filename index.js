const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const morgan = require('morgan');

mongoose
    .connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to DB!'))
    .catch((err) => console.log('Could not connect to DB. ERROR: ', err));

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const PORT = 3000;
const URL = 'http://localhost';

app.listen(PORT, () => {
    console.log(`Server is running at ${URL}:${PORT}...`);
});
