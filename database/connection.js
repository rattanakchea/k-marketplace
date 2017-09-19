var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('db connected with mongoose');
// });

// database
// use native promise
mongoose.Promise = global.Promise;

var promise = mongoose.connect('mongodb://localhost/test', {
  useMongoClient: true,
});

promise.then((db)=> {
  console.log('db connected with mongoose');
}, (err) => {
  console.warn('db connection error', err);
})
