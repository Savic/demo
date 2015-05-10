/**
 * Demo server for testing the nodeJS configuration and CI
 */
 
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// parse application/json
app.use(bodyParser.json());


app.get('/', function (req, res) {
	
	res.send('Hello World!');
});

app.get('/user', function (req, res) {
	res.json( { user: "Max Muser" } );
});

var C = {};                    // C Object simplifies exporting the module
C.getChange = function () {    // enough to satisfy the test
    'use strict';
    return true;               // also passes JSLint
};
module.exports = C;            // export the module with a single method

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});