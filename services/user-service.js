var User = require('../mongoRepository/userRepository');
var GenericService = require('./generic-service');

module.exports = GenericService(User);