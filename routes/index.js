var express = require('express');
var router = express.Router();
var Items = require('../models/Items.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Items.find(function(err, items) {
    // since the function is asyncrounous, we have to pass in a callback to
    // be ran when the db query is finished
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

module.exports = router;
