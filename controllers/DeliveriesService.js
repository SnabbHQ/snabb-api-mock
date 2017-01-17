'use strict';

exports.addressGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "delivery_id" : "aeiou",
  "tracking_url" : "aeiou",
  "dropoff_location" : "{}",
  "created_at" : 123,
  "pickup_location" : "{}",
  "last_update_at" : 123
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
  "history" : [ {
    "uuid" : "aeiou"
  } ],
  "limit" : 123,
  "count" : 123,
  "offset" : 123
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
  "history" : [ {
    "uuid" : "aeiou"
  } ],
  "limit" : 123,
  "count" : 123,
  "offset" : 123
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
  "delivery_id" : "aeiou",
  "tracking_url" : "aeiou",
  "dropoff_location" : "{}",
  "created_at" : 123,
  "pickup_location" : "{}",
  "last_update_at" : 123
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
  "expires_at" : "aeiou",
  "duration" : 1.3579000000000001069366817318950779736042022705078125,
  "distance" : 1.3579000000000001069366817318950779736042022705078125,
  "price" : "aeiou",
  "pickup_eta" : 1.3579000000000001069366817318950779736042022705078125,
  "dropoff_location" : "{}",
  "dropoff_eta" : 1.3579000000000001069366817318950779736042022705078125,
  "quote_id" : "aeiou",
  "pickup_location" : "{}",
  "currency" : "{}"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

