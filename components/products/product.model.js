var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name:  String,
  price: Number,
  category: String,
  photoUrl: String
});

module.exports = mongoose.model('Product', productSchema);