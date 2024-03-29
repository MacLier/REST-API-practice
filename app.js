const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const feedRoutes = require('./routes/feed');

const app = express();

app.use('images', express.static(path.join(__dirname, 'images')))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
    next();
});
app.use(bodyParser.json());

app.use('/feed', feedRoutes);
mongoose.connect('mongodb+srv://testadmin:awCWUmGv8Doz6Ph1@parachute.pecmz.mongodb.net/messages?retryWrites=true&w=majority')
    .then(result => {
        app.listen(8080);
    })
    .catch(err => {
        console.log(err);
    })