var express = require('express');
var router = express.Router();
var ItemsController = require('../controllers/ItemsController.js');

router.get('/', function (req, res) {
  ItemsController.list(req, res);
});

router.get('/:id', function (req, res) {
  ItemsController.show(req, res);
});

router.post('/', function (req, res) {
  ItemsController.create(req, res);
});

router.put('/:id', function (req, res) {
  ItemsController.update(req, res);
});

router.delete('/:id', function (req, res) {
  ItemsController.remove(req, res);
});
module.exports = router;
