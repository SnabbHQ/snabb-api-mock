'use strict';

var Drivers = require('./DriversService');


module.exports.driversGET = function driversGET (req, res, next) {
  Drivers.driversGET(req.swagger.params, res, next);
};
