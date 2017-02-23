'use strict';

exports.quotePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (NewQuote)
  **/
    var examples = {};
  examples['application/json'] = {
  "quote_id" : 719,
  "distance" : 473,
  "expire_at" : 1487882067,
  "quote_user" : 18,
  "tasks" : [ {
    "task_id" : 1421,
    "place" : {
      "place_id" : 1421,
      "description" : "Snabb Master Head Quorters. Wher all the fun takes place! :)",
      "address" : {
        "address_id" : 1421,
        "address" : "Calle San Vicente Martir, 91, 46007, Valencia",
        "latitude" : "39.46661480",
        "longitude" : "-0.38085870",
        "active" : true,
        "created_at" : 1487881468,
        "updated_at" : 1487881468,
        "zipcode" : "46007",
        "city" : {
          "name" : "Valencia",
          "region" : {
            "name" : "Valencia community",
            "country" : {
              "name" : "Spain",
              "iso_code" : "ES",
              "currency" : {
                "symbol" : "€",
                "iso_code" : "EUR"
              }
            }
          }
        }
      }
    },
    "contact" : {
      "first_name" : null,
      "last_name" : null,
      "company_name" : "Martinez e hijos",
      "phone" : "+34625188855",
      "email" : "pp@pp.ppp"
    },
    "order" : 2,
    "comments" : "",
    "task_type" : "dropoff"
  }, {
    "task_id" : 1420,
    "place" : {
      "place_id" : 1420,
      "description" : "Oficina Cactus",
      "address" : {
        "address_id" : 1420,
        "address" : "Pasaje Doctor Serra, 3, 46004, Valencia",
        "latitude" : "39.46670680",
        "longitude" : "-0.37535140",
        "active" : true,
        "created_at" : 1487881468,
        "updated_at" : 1487881468,
        "zipcode" : "46004",
        "city" : {
          "name" : "Valencia",
          "region" : {
            "name" : "Valencia community",
            "country" : {
              "name" : "Spain",
              "iso_code" : "ES",
              "currency" : {
                "symbol" : "€",
                "iso_code" : "EUR"
              }
            }
          }
        }
      }
    },
    "contact" : null,
    "order" : 1,
    "comments" : "Fragile package.",
    "task_type" : "pickup"
  } ],
  "prices" : {
    "medium" : {
      "price" : 3.311,
      "eta" : 20
    },
    "big" : {
      "price" : 5.76,
      "eta" : 30
    },
    "small" : {
      "price" : 2.838,
      "eta" : 20
    }
  },
  "currency" : {
    "symbol" : "€",
    "iso_code" : "EUR"
  },
  "created_at" : 1487881467,
  "updated_at" : 1487881468
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

