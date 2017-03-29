'use strict';

var url = require('url');


var Billing = require('./BillingService');


module.exports.receiptsLIST = function receiptsLIST (req, res, next) {
  Billing.receiptsLIST(req.swagger.params, res, next);
};
