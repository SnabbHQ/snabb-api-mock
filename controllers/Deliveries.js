'use strict';

var url = require('url');


var Deliveries = require('./DeliveriesService');


module.exports.addressGET = function addressGET (req, res, next) {
  Deliveries.addressGET(req.swagger.params, res, next);
};

module.exports.deliveriesCurrentGET = function deliveriesCurrentGET (req, res, next) {
  Deliveries.deliveriesCurrentGET(req.swagger.params, res, next);
};

module.exports.deliveriesHistoryGET = function deliveriesHistoryGET (req, res, next) {
  Deliveries.deliveriesHistoryGET(req.swagger.params, res, next);
};

module.exports.deliveryGET = function deliveryGET (req, res, next) {
  Deliveries.deliveryGET(req.swagger.params, res, next);
};

module.exports.quotePOST = function quotePOST (req, res, next) {
  Deliveries.quotePOST(req.swagger.params, res, next);
};
