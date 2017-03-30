'use strict';

var url = require('url');


var Delivery = require('./DeliveryService');


module.exports.deliveryCancelPOST = function deliveryCancelPOST (req, res, next) {
  Delivery.deliveryCancelPOST(req.swagger.params, res, next);
};

module.exports.deliveryGET = function deliveryGET (req, res, next) {
  Delivery.deliveryGET(req.swagger.params, res, next);
};

module.exports.deliveryLIST = function deliveryLIST (req, res, next) {
  Delivery.deliveryLIST(req.swagger.params, res, next);
};

module.exports.deliveryPOST = function deliveryPOST (req, res, next) {
  Delivery.deliveryPOST(req.swagger.params, res, next);
};

module.exports.quotePOST = function quotePOST (req, res, next) {
  Delivery.quotePOST(req.swagger.params, res, next);
};
