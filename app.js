var express = require('express');
const healthcheckRoutes = require("./healthcheck");
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!, este es mi primer cambio"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.use('/healthcheck', healthcheckRoutes);


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
