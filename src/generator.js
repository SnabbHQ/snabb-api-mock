import SwaggerCodeGen from 'swagger-js-codegen'
import assembleSpec from './assembleSpec'

export default function codeGen() {
  assembleSpec
    .then(function (specObject) {
      const nodejsSourceCode = SwaggerCodeGen.CodeGen.getNodeCode({className: 'Test', swagger: specObject});
      console.log(nodejsSourceCode)
    })
    .catch(function (error) {
      console.log(error)
    })
}
