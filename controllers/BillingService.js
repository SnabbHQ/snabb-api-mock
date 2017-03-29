'use strict';

exports.receiptsLIST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * page (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "count" : 2,
  "next" : "https://api_domain/api/v1/billing/receipts/?page=2",
  "previous" : null,
  "results" : [ {
    "receipt_id" : "8b58bc58-7352-4278-b569-b5d24d8e3f76"
  }, {
    "receipt_id" : "8b58bc58-7352-4278-b569-b5d24d8e3f76"
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

