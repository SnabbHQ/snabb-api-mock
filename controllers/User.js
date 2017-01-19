'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.profileGET = function profileGET (req, res, next) {
  User.profileGET(req.swagger.params, res, next);
};

module.exports.profilePUT = function profilePUT (req, res, next) {
  User.profilePUT(req.swagger.params, res, next);
};

module.exports.registerPOST = function registerPOST (req, res, next) {
  User.registerPOST(req.swagger.params, res, next);
};

module.exports.resetPOST = function resetPOST (req, res, next) {
  User.resetPOST(req.swagger.params, res, next);
};

module.exports.sendVerifyMail = function sendVerifyMail (req, res, next) {
  User.sendVerifyMail(req.swagger.params, res, next);
};

module.exports.updatePassword = function updatePassword (req, res, next) {
  User.updatePassword(req.swagger.params, res, next);
};

module.exports.verifyUser = function verifyUser (req, res, next) {
  User.verifyUser(req.swagger.params, res, next);
};
