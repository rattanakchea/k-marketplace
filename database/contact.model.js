var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
  name:  String,
  address: String,
  phone: String,
  photoUrl: String
});

module.exports = mongoose.model('Contact', contactSchema);