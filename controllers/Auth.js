'use strict';

var url = require('url');


var Auth = require('./AuthService');


module.exports.authPOST = function authPOST (req, res, next) {
  Auth.authPOST(req.swagger.params, res, next);
};
