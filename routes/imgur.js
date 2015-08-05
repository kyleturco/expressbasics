var express = require('express');
var router = express.Router();
var upload = require('multer')({
  dest: 'uploads/',
  fileFilter: function (req, file, cb) {
    cb(null, file.mimetype.slice(0, 6) === 'image/');
  }
});

router.get('/', function(req, res){
  res.render('templates/imgur');
})

router.post('/upload', upload.single('file'), function(req, res){
  console.log(req.file);
  res.redirect('/imgur');
});

module.exports = router;

