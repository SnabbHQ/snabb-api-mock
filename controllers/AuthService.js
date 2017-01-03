'use strict';

exports.authPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * client_id (String)
  * username (String)
  * password (String)
  * grant_type (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "access_token" : "J1qK1c18UUGJFAzz9xnH56584l4",
  "token_type" : "bearer",
  "expires_in" : 2592000,
  "scope" : "api"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.registerPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * email (String)
  * password (String)
  * phone (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "access_token" : "J1qK1c18UUGJFAzz9xnH56584l4",
  "token_type" : "bearer",
  "expires_in" : 2592000,
  "scope" : "api"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

