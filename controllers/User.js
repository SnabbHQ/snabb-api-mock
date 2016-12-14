'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.currentGET = function currentGET (req, res, next) {
  User.currentGET(req.swagger.params, res, next);
};

module.exports.historyGET = function historyGET (req, res, next) {
  User.historyGET(req.swagger.params, res, next);
};

module.exports.profileGET = function profileGET (req, res, next) {
  User.profileGET(req.swagger.params, res, next);
};
