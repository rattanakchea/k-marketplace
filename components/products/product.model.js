var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a product name'
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: 'Enter a product price'
  },
  category: String,
  photoUrl: String,
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);