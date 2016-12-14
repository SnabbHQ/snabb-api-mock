'use strict'

let app = require('connect')()
let http = require('http')
let swaggerTools = require('swagger-tools')
let serverPort = process.env.PORT || 3000
let assembleSpec = require('./assembleSpec').assembleSpec

// swaggerRouter configuration
let options = {
  swaggerUi: '/swagger.yaml',
  controllers: './controllers',
  useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

assembleSpec()
  .then(function (specObject) {

    // Initialize the Swagger middleware
    swaggerTools.initializeMiddleware(specObject, function (middleware) {
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