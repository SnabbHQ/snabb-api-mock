'use strict';

exports.authPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * client_id (String)
  * client_secret (String)
  * scope (String)
  * grant_type (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "access_token" : "aeiou",
  "scope" : "aeiou",
  "token_type" : "aeiou",
  "expires_in" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

