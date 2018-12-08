var connection = require('./connection');
var Schema = require('mongoose').Schema;
//defining user schema
var ContactSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
});

connection.model('Contact', ContactSchema); //defining model
module.exports = require('mongoose').model('Contact'); //getting model