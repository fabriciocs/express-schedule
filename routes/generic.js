 var express = require('express');
var router = express.Router();


module.exports = function (service) {
  router.route('/')
    .post(service.create)
    .put(service.update)
    .get(service.getAll);

  router.route('/:id')
    .get(service.getOne)
    .delete(service.remove);
;
  //router.param('id', service.getById);
  return router;
};