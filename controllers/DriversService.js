'use strict';

exports.driversGET = function (args, res, next) {
  /**
   * parameters expected in the args:
   **/
  var examples = {};
  examples['application/json'] = [
    {
      "product_id": "aeiou",
      "name": "aeiou"
    },
    {
      "product_id": "product2",
      "name": "Pepito"
    }
  ];

  console.log(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2))

  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}

