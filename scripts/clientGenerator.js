'use strict'

let CodeGen = require('swagger-js-codegen').CodeGen
let assembleSpec = require('./assembleSpec').assembleSpec

module.exports.swaggerCodeGen = function () {
  assembleSpec()
    .then(function (specObject) {
      const nodejsSourceCode = CodeGen.getNodeCode({className: 'Test', swagger: specObject});
      console.log(nodejsSourceCode)
    })
    .catch(function (error) {
      console.log(error)
    })
}
