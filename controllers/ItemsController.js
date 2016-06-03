var TaskModel = require('../models/Items.js');

/**
*  Change Task Models to Items
*
* @description :: Server-side logic for managing tasks.
*/
module.exports = {

  /**
  * TaskController.list()
  */
  list: function (req, res) {
    Items.find(function (err, items) {
      return res.json(item);
    });
  },

  /**
  * TaskController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    Items.findOne({_id: id}, function (err, items) {
      return res.json(item);
    });
  },

  /**
  * TaskController.create()
  */
  create: function (req, res) {
    var item = new Items({
            text : req.body.text
    });

    task.save(function (err, task) {
      return res.json(task);
    });
  },

  /**
  * TaskController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    TaskModel.findOne({_id: id}, function (err, task) {
      task.text = req.body.text ? req.body.text : task.text;
      task.save(function (err, task) {
        return res.json(task);
      });
    });
  },

  /**
  * TaskController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    TaskModel.findByIdAndRemove(id, function (err, task) {
      return res.json(task);
    });
  }
};
