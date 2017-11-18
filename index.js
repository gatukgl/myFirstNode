const express = require('./config/express');
const passport = require('./config/passport');
const mongoose = require('./config/mongoose');


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

var db = mongoose();
var app = express();
var psp = passport();

app.listen(process.env.PORT, () => {
    var port = app.address().port;
    console.log('This is the actual port  -> ' + port)
    console.log('Starting node.js on port ' + process.env.PORT);
});

module.exports = app;
