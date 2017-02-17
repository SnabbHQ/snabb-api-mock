'use strict';

var url = require('url');


var Address = require('./AddressService');


module.exports.verifyAddress = function verifyAddress (req, res, next) {
  Address.verifyAddress(req.swagger.params, res, next);
};
