
var express = require('express');
var router = express.Router();
var Items = require('../models/Items');

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

module.exports = router;
