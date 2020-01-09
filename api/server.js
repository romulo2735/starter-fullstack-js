const express  = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

/** Start Server */
const app = express();

/** Start Connection Database */
mongoose.connect('mongodb://localhost/huntapi', {useNewUrlParser: true});
requireDir('./src/models/Product');

/** Routes */
app.get('/', (req, res) => {
  res.send('Welcome to api');
});


app.listen(3000);

