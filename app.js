var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(function (req, res, next) {
  console.log('Request at ' + new Date().toISOString());
  next();
});

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('This is the remix');
});

app.get('/pizza/:topping/:qty', function (req, res) {
  var obj = req.params;
  obj.title = 'Pizza Shop';

  res.render('templates/pizza', obj);
});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/awesometown', function (req, res) {
  setTimeout(function () {
    var awesomeThings = [
      'Pizza',
      'Bacon',
      '2nd Amendment',
      'Pluto',
      'Space Jam'
    ];

    res.render('templates/world',
      { title: 'PartyTime.com',
        welcome: 'Thanks for stopping by',
        awesomeThings: awesomeThings
      }
    );
  }, 5000);
});

app.get('/json', function (req, res) {
  res.send({an: 'object'});
});

app.get('/thisshoulderror', function (req, res) {
  res.send(badVariable);
});

app.get('/test', function (req, res, next) {
  res.write('Test1');
  next();
});

app.get('/test', function (req, res) {
  res.write('Test2');
  next();
});

app.use(function (req, res) {
  // 400s before 500s
  res.status(403).send('Unauthorized!');
});

app.use(function (err, req, res, next) {
  // pass 4 arguments to create an error handling middleware
  console.log('ERRRoRoRR!', err.stack);
  res.status(500).send('My B, brah');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
