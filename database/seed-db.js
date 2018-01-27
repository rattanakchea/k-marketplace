require('dotenv').config();

const DB_CONN = "mongodb://localhost:27017/test";

const MongoClient = require('mongodb').MongoClient;
//const bcrypt = require('bcrypt');
const users = require('./users');
const products = require('./products');

// Todo: seed with Mongoose instead of MongoClient
function seedCollection(collectionName, initialRecords) {
  MongoClient.connect(DB_CONN, (err, db) => {
    console.log('connected to mongodb...');
    const collection = db.collection(collectionName);
    collection.remove();
    // initialRecords.forEach((item) => {
    //   if (item.password) {
    //     item.password = bcrypt.hashSync(item.password, 10);
    //   }
    // });

    console.log('inserting records...');
    collection.insertMany(initialRecords, (err, result) => {
      console.log(`${result.insertedCount} records inserted into ${collectionName}`);
      console.log('closing connection...');
      db.close();
      console.log('done.');
    });

  });
}

seedCollection('users', users);
seedCollection('products', products);