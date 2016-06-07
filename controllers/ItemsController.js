var Items = require('../models/Items.js');

/**
*  Change Task Models to Items
*
* @description :: Server-side logic for managing items.
*/
module.exports = {

  /**
  * TaskController.list()
  */
  list: function (req, res) {
    Items.find(function (err, items) {
      return res.json(items);
    });
  },

  /**
  * TaskController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    Items.findOne({_id: id}, function (err, items) {
      return res.json(items);
    });
  },

  /**
  * TaskController.create()
  */
  create: function (req, res) {
    var item = new Items({
        name : req.body.name,
        quantity : req.body.quantity,
    });

    item.save(function (err, item) {
      return res.json(item);
    });
  },

  /**
  * TaskController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    Items.findOne({_id: id}, function (err, item) {
      item.text = req.body.text ? req.body.text : item.text;
      item.save(function (err, item) {
        return res.json(item);
      });
    });
  },

  /**
  * TaskController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    Items.findByIdAndRemove(id, function (err, item) {
      return res.json(item);
    });
  }
};
