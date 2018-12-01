var connection = require('./connection');
var Schema = require('mongoose').Schema;
//defining user schema
var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});

connection.model('User', UserSchema); //defining model
module.exports = require('mongoose').model('User'); //getting model