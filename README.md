# Swagger based API mock for Snabb backend
[![CircleCI](https://circleci.com/gh/SnabbHQ/snabb-api-mock.svg?style=shield&circle-token=1092d3fe71b80d8fce088cdadbd878de37ab8389)](https://circleci.com/gh/SnabbHQ/snabb-api-mock)

## URL and API docs
We are using Heroku as platform where to host our mocked API:
* http://snabb-api-mock.herokuapp.com/docs

## Overview
Snabb API mock using a combination of the following tools:

 - **Swagger**: Swagger is a powerful open source framework backed by a large ecosystem of tools that helps you design, build, document, and consume your RESTful APIs.
 - **Node.js**: We are using multiple tools from node in order to compose and run our Swagger API based specification. Check assembleSpec.js for more info.
 - **CircleCi**: CI tool in charge of the CD pipeline. Every time a push to master occurs, CircleCi will automatically push 
 the to Heroku.

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
