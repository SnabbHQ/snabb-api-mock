'use strict';

exports.deliveryCancelPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * delivery_id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deliveryGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * delivery_id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "delivery_id" : "8b58bc58-7352-4278-b569-b5d24d8e3f76",
  "courier" : {
    "id" : "ZxK8Ygbpr1sfYgDaNURPjXKa",
    "name" : "Michael Knight",
    "phone" : "+34661518132",
    "onDuty" : false,
    "timeLastSeen" : 1486407209054,
    "imageUrl" : "https://d15p8tr8p0vffz.cloudfront.net/090a12045fe17fafecda8497/294.png",
    "location" : [ -0.3754607, 39.4667116 ],
    "vehicle" : {
      "id" : "h3OUAyCxLrUIdIOk8930sNMf",
      "type" : "BICYCLE",
      "description" : null,
      "licensePlate" : null,
      "color" : null,
      "timeLastModified" : 1482423618129
    }
  },
  "currency" : {
    "symbol" : "€",
    "iso_code" : "EUR"
  },
  "price" : 3.31,
  "created_at" : 1487881467,
  "updated_at" : 1487881468,
  "order_reference_id" : "SNABB2017001",
  "quote_id" : 719,
  "tasks" : [ {
    "task_id" : 1421,
    "place" : {
      "place_id" : 1421,
      "description" : "Snabb Master Head Quarters. Where all the fun takes place! :)",
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
    "task_type" : "dropoff",
    "dispatching_meta" : {
      "trackingURL" : "https://onf.lt/5f8b5c65f9",
      "state" : 1,
      "estimatedCompletionTime" : 1488303586404
    }
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
    "task_type" : "pickup",
    "dispatching_meta" : {
      "trackingURL" : "https://onf.lt/5f8b5c65f9",
      "state" : 1,
      "estimatedCompletionTime" : 1488303586404
    }
  } ],
  "status" : "en_route_to_pickup"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deliveryLIST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * page (BigDecimal)
  * status (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "count" : 92,
  "next" : "https://api_domain/api/v1/delivery/?page=2",
  "previous" : null,
  "results" : [ {
    "delivery_id" : "8b58bc58-7352-4278-b569-b5d24d8e3f76",
    "courier" : {
      "id" : "ZxK8Ygbpr1sfYgDaNURPjXKa",
      "name" : "Michael Knight",
      "phone" : "+34661518132",
      "onDuty" : false,
      "timeLastSeen" : 1486407209054,
      "imageUrl" : "https://d15p8tr8p0vffz.cloudfront.net/090a12045fe17fafecda8497/294.png",
      "location" : [ -0.3754607, 39.4667116 ],
      "vehicle" : {
        "id" : "h3OUAyCxLrUIdIOk8930sNMf",
        "type" : "BICYCLE",
        "description" : null,
        "licensePlate" : null,
        "color" : null,
        "timeLastModified" : 1482423618129
      }
    },
    "currency" : {
      "symbol" : "€",
      "iso_code" : "EUR"
    },
    "price" : 3.31,
    "created_at" : 1487881467,
    "updated_at" : 1487881468,
    "order_reference_id" : "SNABB2017001",
    "quote_id" : 719,
    "tasks" : [ {
      "task_id" : 1421,
      "place" : {
        "place_id" : 1421,
        "description" : "Snabb Master Head Quarters. Where all the fun takes place! :)",
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
      "task_type" : "dropoff",
      "dispatching_meta" : {
        "trackingURL" : "https://onf.lt/5f8b5c65f9",
        "state" : 1,
        "estimatedCompletionTime" : 1488303586404
      }
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
      "task_type" : "pickup",
      "dispatching_meta" : {
        "trackingURL" : "https://onf.lt/5f8b5c65f9",
        "state" : 1,
        "estimatedCompletionTime" : 1488303586404
      }
    } ],
    "status" : "en_route_to_pickup"
  }, {
    "delivery_id" : "8b58bc58-7352-4278-b569-b5d24d8e3f76",
    "courier" : {
      "id" : "ZxK8Ygbpr1sfYgDaNURPjXKa",
      "name" : "Michael Knight",
      "phone" : "+34661518132",
      "onDuty" : false,
      "timeLastSeen" : 1486407209054,
      "imageUrl" : "https://d15p8tr8p0vffz.cloudfront.net/090a12045fe17fafecda8497/294.png",
      "location" : [ -0.3754607, 39.4667116 ],
      "vehicle" : {
        "id" : "h3OUAyCxLrUIdIOk8930sNMf",
        "type" : "BICYCLE",
        "description" : null,
        "licensePlate" : null,
        "color" : null,
        "timeLastModified" : 1482423618129
      }
    },
    "currency" : {
      "symbol" : "€",
      "iso_code" : "EUR"
    },
    "price" : 3.31,
    "created_at" : 1487881467,
    "updated_at" : 1487881468,
    "order_reference_id" : "SNABB2017001",
    "quote_id" : 719,
    "tasks" : [ {
      "task_id" : 1421,
      "place" : {
        "place_id" : 1421,
        "description" : "Snabb Master Head Quarters. Where all the fun takes place! :)",
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
      "task_type" : "dropoff",
      "dispatching_meta" : {
        "trackingURL" : "https://onf.lt/5f8b5c65f9",
        "state" : 1,
        "estimatedCompletionTime" : 1488303586404
      }
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
      "task_type" : "pickup",
      "dispatching_meta" : {
        "trackingURL" : "https://onf.lt/5f8b5c65f9",
        "state" : 1,
        "estimatedCompletionTime" : 1488303586404
      }
    } ],
    "status" : "completed"
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

exports.deliveryPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * quote_id (BigDecimal)
  * selected_package_size (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "delivery_id" : "8b58bc58-7352-4278-b569-b5d24d8e3f76",
  "courier" : {
    "id" : "ZxK8Ygbpr1sfYgDaNURPjXKa",
    "name" : "Michael Knight",
    "phone" : "+34661518132",
    "onDuty" : false,
    "timeLastSeen" : 1486407209054,
    "imageUrl" : "https://d15p8tr8p0vffz.cloudfront.net/090a12045fe17fafecda8497/294.png",
    "location" : [ -0.3754607, 39.4667116 ],
    "vehicle" : {
      "id" : "h3OUAyCxLrUIdIOk8930sNMf",
      "type" : "BICYCLE",
      "description" : null,
      "licensePlate" : null,
      "color" : null,
      "timeLastModified" : 1482423618129
    }
  },
  "currency" : {
    "symbol" : "€",
    "iso_code" : "EUR"
  },
  "price" : 3.31,
  "created_at" : 1487881467,
  "updated_at" : 1487881468,
  "order_reference_id" : "SNABB2017001",
  "quote_id" : 719,
  "tasks" : [ {
    "task_id" : 1421,
    "place" : {
      "place_id" : 1421,
      "description" : "Snabb Master Head Quarters. Where all the fun takes place! :)",
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
    "task_type" : "dropoff",
    "dispatching_meta" : {
      "trackingURL" : "https://onf.lt/5f8b5c65f9",
      "state" : 1,
      "estimatedCompletionTime" : 1488303586404
    }
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
    "task_type" : "pickup",
    "dispatching_meta" : {
      "trackingURL" : "https://onf.lt/5f8b5c65f9",
      "state" : 1,
      "estimatedCompletionTime" : 1488303586404
    }
  } ],
  "status" : "en_route_to_pickup"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.quotePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (PostQuote)
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
      "description" : "Snabb Master Head Quarters. Where all the fun takes place! :)",
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

