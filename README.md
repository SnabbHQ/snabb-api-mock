# Swagger based API mock for Snabb backend
[![CircleCI](https://circleci.com/gh/SnabbHQ/snabb-api-mock.svg?style=shield&circle-token=1092d3fe71b80d8fce088cdadbd878de37ab8389)](https://circleci.com/gh/SnabbHQ/snabb-api-mock)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/8fc0a33c7a90b116c22e)

## URL and API docs
We are using Heroku as platform where to host our mocked API:
* http://snabb-api-mock.herokuapp.com/docs

## Overview
Snabb API mock using a combination of the following tools:

 - **Swagger**: Swagger is a powerful open source framework backed by a large ecosystem of tools that helps you design, build, document, and consume your RESTful APIs.
 - **Node.js**: We are using multiple tools from node in order to compose and run our Swagger API based specification. Check assembleSpec.js for more info.
 - **CircleCi**: CI tool in charge of the CD pipeline. Every time a push to master occurs, CircleCi will automatically push
 the to Heroku.

### Automatically generate spec
As you can see in the package.json we have defined a script to automatically generate a single Swagger file spec.
Simply run:

```
npm run spec-gen
```

You will find the outcome in the spec folder.


### Automatically generate code
In order to automatically generate the server side mock code, you will need to install [swagger-codegen]
(https://github.com/swagger-api/swagger-codegen). If you are in OSX simply do:

```
brew install swagger-codegen
```

Once you have swagger-codegen-cli installed, you can simply run the following command to update the controllers for
the api stub:

```
npm run code-gen
```

### Swagger File Structure
In order to break down our API specification in smaller pieces so does not drive us crazy having our entire API spec in a single file, we are using [json-refs](https://github.com/whitlockjc/json-refs) to compose our broken down spec.


### Running the server locally
To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:3000/docs
```

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.

### API testing
Developing the mock and the spec is great but this spec should match exactly the endpoints we are developing. In 
order to do so we are using [Dredd](http://dredd.readthedocs.io/en/latest/). This library will compare the spec 
provided with the api responses from a given endpoint. Check this example to run it against the Mock API endpoint. 
 

```
node_modules/.bin/dredd swagger.yaml https://snabb-api-mock.herokuapp.com
```


### Specification examples
https://github.com/OAI/OpenAPI-Specification/tree/master/examples/v2.0/json
