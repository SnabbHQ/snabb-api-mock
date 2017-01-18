'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.profileGET = function profileGET (req, res, next) {
  User.profileGET(req.swagger.params, res, next);
};

module.exports.profilePUT = function profilePUT (req, res, next) {
  User.profilePUT(req.swagger.params, res, next);
};

module.exports.resetPOST = function resetPOST (req, res, next) {
  User.resetPOST(req.swagger.params, res, next);
};

module.exports.updatePassword = function updatePassword (req, res, next) {
  User.updatePassword(req.swagger.params, res, next);
};

module.exports.verifyUser = function verifyUser (req, res, next) {
  User.verifyUser(req.swagger.params, res, next);
};

module.exports.verifyUser_1 = function verifyUser_1 (req, res, next) {
  User.verifyUser_1(req.swagger.params, res, next);
};
