'use strict';

exports.profileGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "profile_id" : 3254345,
  "company_name" : "Knight Industries Inc.",
  "first_name" : "Michael",
  "last_name" : "Knight",
  "email" : "michael.knight@snabb.io",
  "phone" : "+46712345678",
  "verified" : false,
  "send_email_notifications" : false,
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

exports.profilePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * profile_id (String)
  * company_name (String)
  * first_name (String)
  * last_name (String)
  * email (String)
  * phone (String)
  * user_lang (String)
  * send_email_notifications (Boolean)
  * send_sms_notifications (Boolean)
  **/
    var examples = {};
  examples['application/json'] = {
  "profile_id" : 3254345,
  "company_name" : "Knight Industries Inc.",
  "first_name" : "Michael",
  "last_name" : "Knight",
  "email" : "michael.knight@snabb.io",
  "phone" : "+46712345678",
  "verified" : false,
  "send_email_notifications" : false,
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

exports.resetPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.sendVerifyMail = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.updatePassword = function(args, res, next) {
  /**
   * parameters expected in the args:
  * profile_id (String)
  * current_password (String)
  * new_password (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.verifyUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hash (String)
  **/
  // no response value expected for this operation
  res.end();
}

