'use strict';

exports.verifyAddress = function(args, res, next) {
  /**
   * parameters expected in the args:
  * address (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "key" : "ADDRESS_OK",
  "code" : 200206,
  "message" : "Address valid"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

