'use strict'

let jsonRefs = require('json-refs')
let Yaml = require('js-yaml')
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
          //console.log(res.text)
          callback(null, Yaml.load(res.text));
        }
      }
    };

    jsonRefs.resolveRefs(root, jsonRefOptions)
      .then(function (results) {

        let yaml = Yaml.dump(results.resolved)
        fs.writeFile('swagger.yaml', yaml, function (error) {
          if (error)
            return reject(error)
        })

        if (Config.LOGGING_ENABLED) {
          console.log(yaml);
        }

        resolve(results.resolved);
      })
      .catch(function (error) {
        reject(error);
      })
  })
}

