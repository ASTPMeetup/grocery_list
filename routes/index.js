var express = require('express');
var router = express.Router();
var Items = require('../models/Items.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Items.find(function(err, items) {
    if(err){
      console.log(err);
    }
    else {
      res.render('index', {
        title: 'Grocery List App!',
        items: items
      });
    }
  });
});

router.post('/Item', function(req, res, next) {
  var item = new Items ({
      name : req.body.name,
      quantity: req.body.quantity
  });

  item.save(function(err, items) {
    if(err){
      console.log(err);
    }
    res.redirect('/');
  });
});

/*
* GET
*/
router.get('/:id', function (req, res) {
  var id = req.params.id;
  Items.findOne({_id: id}, function (err, item) {
    return res.json(item);
  });
});
/*
* PUT
*/
router.put('/:id', function (req, res) {
  var id = req.params.id;
  Items.findOne({_id: id}, function (err, items) {
    item.text = req.body.text ? req.body.text : item.text;

    item.save(function (err, items) {
      return res.json(item);
    });
  });
});

/*
* DELETE
*/
router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Items.findByIdAndRemove(id, function (err, items) {
    return res.json(item);
  });
});

module.exports = router;
