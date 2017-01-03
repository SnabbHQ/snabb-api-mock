'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.profileGET = function profileGET (req, res, next) {
  User.profileGET(req.swagger.params, res, next);
};

module.exports.resetPOST = function resetPOST (req, res, next) {
  User.resetPOST(req.swagger.params, res, next);
};
