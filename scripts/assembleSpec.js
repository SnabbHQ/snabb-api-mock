'use strict'

let jsonRefs = require('json-refs')
let Yaml = require('yaml-js')
let fs = require('fs')
let Config = require('./Config').Config

module.exports.assembleSpec = function() {
  return new Promise(function (resolve, reject) {

    // The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
    let root = Yaml.load(fs.readFileSync('./api/swagger.yaml').toString());

    let jsonRefOptions = {
      filter: ['relative', 'remote'],
      loaderOptions: {
        processContent: function (res, callback) {
          callback(null, Yaml.load(res.text));
        }
      }
    };

    jsonRefs.resolveRefs(root, jsonRefOptions)
      .then(function (results) {

        if (Config.LOGGING_ENABLED) {
          let jsonString = JSON.stringify(results.resolved, null, 2)
          console.log(jsonString);
          fs.writeFile('./spec/swagger.json', jsonString, function(error) {
            if (error) {
              return reject(error)
            }
          })
        }

        resolve(results.resolved);
      })
      .catch(function (error) {
        reject(error);
      })
  })
}

