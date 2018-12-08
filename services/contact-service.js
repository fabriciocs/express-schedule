var Repository = require('../mongoRepository/contactRepository');
var GenericServe = require('./generic-service');
var service = GenericServe(Repository);

service.create = function (req, res, next) {
    var body = {
        _id: req.body._id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };
    var repository = new Respository(body);
    repository.save(function (err) {
        if (err) {
            next(err);
        } else {
            res.json(repository);
        }
    });
};

service.update = function (req, res, next) {
    var body = {
        _id: req.body._id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };
    Repository.findOneAndUpdate(body._id, body, function (err, user) {
        if (err) {
            next(err);
        } else {
            res.json(user);
        }
    });
};

module.exports = service;