'use strict';

exports.profileGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "first_name" : "Michael",
  "last_name" : "Knight",
  "email" : "michael.knight@snabb.io",
  "phone" : {
    "number" : "+46712345678"
  },
  "thumbnail" : "https://encrypted-tbn1.gstatic .com/images?q=tbn:ANd9GcTlovN715rKGVOscWvovnblMwpvwMlknTosSXthVP9xLlW7KCfw",
  "verified" : false
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

