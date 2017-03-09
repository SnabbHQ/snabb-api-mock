'use strict';

var url = require('url');


var Authentication = require('./AuthenticationService');


module.exports.authPOST = function authPOST (req, res, next) {
  Authentication.authPOST(req.swagger.params, res, next);
};
