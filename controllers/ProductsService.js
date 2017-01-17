'use strict';

exports.productsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * latitude (Double)
  * longitude (Double)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "display_name" : "aeiou",
  "product_id" : "aeiou",
  "description" : "aeiou",
  "image" : "aeiou",
  "capacity" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

