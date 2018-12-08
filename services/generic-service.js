module.exports = function (Repository) {

    var create = function (req, res, next) {
        var repository = new Repository(req.body);

        repository.save(function (err) {
            if (err) {
                next(err);
            } else {
                res.json(repository);
            }
        });
    };

    var update = function (req, res, next) {
        Repository.findOneAndUpdate(req.body._id, req.body, function (err, user) {
            if (err) {
                next(err);
            } else {
                res.json(user);
            }
        });
    };

    var remove = function (req, res, next) {
        Repository.deleteOne({
            _id: req.params.id
        }, function (err, data) {
            if (err) {
                next(err);
            } else {
                res.json(200, {
                    "msg": "Removido Com Sucesso"
                });
            }
        });
    };

    var getAll = function (req, res, next) {
        Repository.find(function (err, all) {
            if (err) {
                next(err);
            } else {
                res.json(all);
            }
        });
    };

    var getOne = function (req, res) {
        getById(req.params.id, function callbackRemove(err, data) {
            console.log(data);
            res.json(data);
        });

    };

    var getById = function (id, callback) {
        Repository.findOne({
            _id: id
        }, function (err, obj) {
            callback(err, obj);
        });
    };

    return {
        create: create,
        update: update,
        remove: remove,
        getAll: getAll,
        getOne: getOne,
        getById: getById
    };
};