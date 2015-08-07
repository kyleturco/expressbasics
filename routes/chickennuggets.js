var express = require('express');
var router = express.Router();
var moment = require('moment');
var ObjectID = require('mongodb').ObjectID;


router.get('/', function (req, res) {
  var collection = global.db.collection('chickenNuggets')

  collection.find({}).toArray(function(err, orders) {
    var formattedOrders = orders.map(function (order) {
      return {
        _id:        order._id,
        name:       order.name,
        flavor:     order.style,
        quantity:   order.qty,
        createdAt:  order._id.getTimestamp(),
      }
    });

    res.render('templates/chicken-index', {orders: formattedOrders});

  });
});

router.get('/', function (req, res) {
  res.render('templates/chicken-new');
});

router.post('/order/:id/complete', function (req, res) {
  var collection = global.db.collection('chickenNuggets');

  collection.update(
    {_id: ObjectID(req.params.id)},
    {$set: {complete: true}},
    function () {
      res.redirect('/chickennuggets')
  });
});

module.exports = router;
