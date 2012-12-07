
/**
 * Module dependencies.
 */
var express = require('express')
  , util = require('util')
  , nconf = require('nconf')
  , configurations = module.exports
  , app = express()
  , server = require('http').createServer(app)
  , settings = require('./settings')(app, configurations, express);

nconf.argv().env().file({ file: 'local.json' });

require('./routes')(app);

var port = process.env.PORT || nconf.get('port');
server.listen(port);

util.log("Listening port "+port)
