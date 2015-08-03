var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('This is the remix');
});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.use(function (req, res) {
  res.status(403);
  res.send('Unauthorized!');
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
