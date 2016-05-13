var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var taskSchema = new Schema({
    'name' : String,
    'quantity' : String
});

module.exports = mongoose.model('Items', taskSchema);
