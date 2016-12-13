'use strict';

var app = require('connect')();
var http = require('http');
var jsonRefs = require('json-refs').resolveRefs;
var YAML = require('yaml-js');
var swaggerTools = require('swagger-tools');
var fs = require('fs');
var serverPort = process.env.PORT || 3000;

// Enable/disable to print logs in console or not
const LOGGING_ENABLED = false;

// swaggerRouter configuration
var options = {
  swaggerUi: '/swagger.json',
  controllers: './controllers',
  useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

module.exports.startServer = function() {
  assembleSpec()
    .then(function (specObject) {

      // Initialize the Swagger middleware
      swaggerTools.initializeMiddleware(specObject, function (middleware) {
        // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
        app.use(middleware.swaggerMetadata());

        // Validate Swagger requests
        app.use(middleware.swaggerValidator());

        // Route validated requests to appropriate controller
        app.use(middleware.swaggerRouter(options));

        // Serve the Swagger documents and Swagger UI
        app.use(middleware.swaggerUi());

        // Start the server
        http.createServer(app).listen(serverPort, function () {
          console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
          console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
        });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

function assembleSpec() {
  return new Promise(function (resolve, reject) {

    // The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
    var root = YAML.load(fs.readFileSync('swagger.yaml').toString());

    var jsonRefOptions = {
      filter: ['relative', 'remote'],
      loaderOptions: {
        processContent: function (res, callback) {
          callback(null, YAML.load(res.text));
        }
      }
    };

    jsonRefs(root, jsonRefOptions)
      .then(function (results) {

        if (LOGGING_ENABLED) {
          console.log(JSON.stringify(results.resolved, null, 2));
        }

        resolve(results.resolved);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

