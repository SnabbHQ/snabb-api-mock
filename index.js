// var resolve = require('json-refs').resolveRefs;
// var YAML = require('yaml-js');
// var fs = require('fs');
//
// var root = YAML.load(fs.readFileSync('swagger.yaml').toString());
// var options = {
//   filter        : ['relative', 'remote'],
//   loaderOptions : {
//     processContent : function (res, callback) {
//       callback(null, YAML.load(res.text));
//     }
//   }
// };
// resolve(root, options).then(function (results) {
//   console.log(JSON.stringify(results.resolved, null, 2));
// });


'use strict';

var app = require('connect')();
var http = require('http');
var resolve = require('json-refs').resolveRefs;
var YAML = require('yaml-js');
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var fs = require('fs');
var serverPort = process.env.PORT || 3000;

// swaggerRouter configuration
var options = {
  swaggerUi: '/swagger.json',
  controllers: './controllers',
  useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

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

resolve(root, jsonRefOptions)
  .then(function (results) {
    console.log(JSON.stringify(results.resolved, null, 2));

    // Initialize the Swagger middleware
    swaggerTools.initializeMiddleware(results.resolved, function (middleware) {
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
  .catch(function(error) {
    console.log(error)
  });