var Repository = require('../mongoRepository/contactRepository');
var GenericServe = require('./generic-service');
module.exports = GenericServe(Repository);