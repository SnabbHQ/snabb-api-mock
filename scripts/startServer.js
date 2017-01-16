'use strict'

let app = require('connect')()
let http = require('http')
let swaggerTools = require('swagger-tools')
let serverPort = process.env.PORT || 5000
let assembleSpec = require('./assembleSpec').assembleSpec
let basicAuth = require('basic-auth-connect');

// swaggerRouter configuration
let options = {
  swaggerUi: '/swagger.yaml',
  controllers: './controllers',
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

assembleSpec()
  .then(function (specObject) {

    // Initialize the Swagger middleware
    swaggerTools.initializeMiddleware(specObject, function (middleware) {

      // TODO - Super shitty and really un-secure way of auth but will do for now!! NOOOOOOOOOOOOOOO
      // Disabled for now due to issues with fetching from client apps and internals
      //app.use(basicAuth('snabbdev', 'devtest'));

      // Enable CORS headers. Btw for some black magic reason, this does no work if we put it after the last
      // middleware use function.
      app.use((req, res, next) => {

        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        res.setHeader('Access-Control-Allow-Headers', '*');
        if ( req.method === 'OPTIONS' ) {
          res.writeHead(200);
          res.end();
        }

        next()
      })

      // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
      app.use(middleware.swaggerMetadata())

      // Validate Swagger requests
      app.use(middleware.swaggerValidator())

      // Route validated requests to appropriate controller
      app.use(middleware.swaggerRouter(options))

      // Serve the Swagger documents and Swagger UI
      app.use(middleware.swaggerUi())

      // Start the server
      http.createServer(app).listen(serverPort, function () {
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
        console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
      })
    })
  })
  .catch(function (error) {
    console.log(error);
  })