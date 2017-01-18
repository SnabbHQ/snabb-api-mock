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
  * user_lang (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "profile_id" : 3254345,
  "company_name" : "Knight Industries Inc.",
  "first_name" : "",
  "last_name" : "",
  "email" : "michael.knight@snabb.io",
  "phone" : "+46712345678",
  "verified" : false,
  "send_email_notifications" : true,
  "send_sms_notifications" : true,
  "user_lang" : "en",
  "updated_at" : 1441146983,
  "created_at" : 1441146983
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

