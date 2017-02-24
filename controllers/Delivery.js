'use strict';

var url = require('url');


var Delivery = require('./DeliveryService');


module.exports.quotePOST = function quotePOST (req, res, next) {
  Delivery.quotePOST(req.swagger.params, res, next);
};
