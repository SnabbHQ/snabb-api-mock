var fs = require('fs');
var CodeGen = require('swagger-js-codegen').CodeGen;
var assemble = rquire

var file = 'swagger/spec.json';

var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
var nodejsSourceCode = CodeGen.getNodeCode({ className: 'Test', swagger: swagger });

console.log(nodejsSourceCode);