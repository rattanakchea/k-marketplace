var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name:  String,
  priace: Number,
  category: String,
  photoUrl: String
});

module.exports = mongoose.model('Product', productSchema);