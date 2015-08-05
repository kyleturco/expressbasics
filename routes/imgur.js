var router = require('express').Router();
var upload = require('multer')({ dest: 'uploads/'});

router.get('/', function (req, res))
