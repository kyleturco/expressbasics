var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('This is the remix');
});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/json', function (req, res) {
  res.send({an: 'object'});
});

app.get('/thisshoulderror', function (req, res) {
  res.send(badVariable);
});

app.use(function (err, req, res, next) {
  // pass 4 arguments to create an error handling middleware
  console.log('ERRRoRoRR!', err.stack);
  res.status(500).send('My B, brah');
})

app.use(function (req, res) {
  res.status(403).send('Unauthorized!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
