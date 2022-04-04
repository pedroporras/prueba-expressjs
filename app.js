var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!, este es mi primer cambio"
  });
});

app.get('/health-check', function(req, res){
  res.send({
    "Output": "Prueba otro endpoint"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
