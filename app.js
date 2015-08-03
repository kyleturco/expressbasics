var express = require('express');
var app = express();
var router = express.Router();

router.set('view engine', 'ejs');

router.use(function (req, res, next) {
  // logging at the top
  console.log('Request at ' + new Date().toISOString());
  next();
});
router.use(express.static('public'));
router.get('/', function (req, res) {
  res.send('Hello World!');
});
router.get('/pizza/:topping/:qty', function (req, res) {
  var obj = req.params;
  obj.title = 'Pizza Shop';

  res.render('templates/pizza', obj);
});
router.get(/hello/, function (req, res) {
  res.send('Hello!');
});
router.get('/awesomethings', function (req, res) {
  setTimeout(function () {
    var awesomeThings = [
      'Pizza',
      'Bacon',
      '2nd Ammendment',
      'Pluto',
      'Space Jam'
    ];

    res.render('templates/world',
      { title: 'Awesomesite.com',
        welcome: 'Thanks for coming!',
        awesomeThings: awesomeThings
      }
    );
  }, 5000);
});
router.get('/test', function (req, res, next) {
  res.write('Test1!');
  next();
});
router.get('/test', function (req, res) {
  res.end('Test2!');
});
router.get('/json', function (req, res) {
  res.send({an: 'object'});
});
router.get('/thisshoulderror', function (req, res) {
  res.send(badVariable);
});
router.use(function (req, res) {
  res.status(403).send('Unauthorized!');
});
router.use(function (err, req, res, next) {
  // pass 4 arguments to create an error handling middleware
  console.log('ERRRRRRRRRR', err.stack);
  res.status(500).send('My Bad');
});

var server =router.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%d', host, port);
});
