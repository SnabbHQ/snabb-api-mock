'use strict';

exports.addressGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "pickup_location" : "{}",
  "delivery_id" : "aeiou",
  "last_update_at" : 123,
  "created_at" : 123,
  "tracking_url" : "aeiou",
  "dropoff_location" : "{}"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deliveriesCurrentGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offset (Integer)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "offset" : 123,
  "limit" : 123,
  "count" : 123,
  "history" : [ {
    "uuid" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deliveriesHistoryGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * offset (Integer)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "offset" : 123,
  "limit" : 123,
  "count" : 123,
  "history" : [ {
    "uuid" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deliveryGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * delivery_id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "pickup_location" : "{}",
  "delivery_id" : "aeiou",
  "last_update_at" : 123,
  "created_at" : 123,
  "tracking_url" : "aeiou",
  "dropoff_location" : "{}"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.quotePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * quoteInfo (NewQuote)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "duration" : 1.3579000000000001069366817318950779736042022705078125,
  "expires_at" : "aeiou",
  "distance" : 1.3579000000000001069366817318950779736042022705078125,
  "pickup_location" : "{}",
  "dropoff_eta" : 1.3579000000000001069366817318950779736042022705078125,
  "price" : "aeiou",
  "quote_id" : "aeiou",
  "currency" : "{}",
  "pickup_eta" : 1.3579000000000001069366817318950779736042022705078125,
  "dropoff_location" : "{}"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

