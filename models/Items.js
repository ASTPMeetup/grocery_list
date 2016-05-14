var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var taskSchema = new Schema({
    'name' : String,
    'quantity' : {type: Number, max: 99}
});

module.exports = mongoose.model('Items', taskSchema);
