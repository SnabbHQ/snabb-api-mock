'use strict';

var url = require('url');


var Address = require('./AddressService');


module.exports.validateAddress = function validateAddress (req, res, next) {
  Address.validateAddress(req.swagger.params, res, next);
};
