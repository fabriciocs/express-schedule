var connection = require('./connection');
var Schema = require('mongoose').Schema;
//defining user schema
var ContactSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});

connection.model('Contact', ContactSchema); //defining model
module.exports = require('mongoose').model('Contact'); //getting model