var express = require('express');
var router = express.Router();
var Product = require('./product.model');

// import { addNewProduct } from './product.controller';
var productCtrl = require('./product.controller');


/* GET products */
router.get('/', function (req, res, next) {
  Product.find((err, products) => {
    if (err) res.send(err);
    res.json(products);
  })
});

/* POST add product */
router.post('/', productCtrl.addNewProduct);

router.get('/:product_id', function (req, res, next) {
  Product.findById(req.params.product_id, (err, item) => {
    if (err) res.send(err);
    res.json(item);
  })
});

// get products by category
router.get('/category/:product_cat', function (req, res, next) {
  Product.find({
    category: req.params.product_cat
  }, (err, items) => {
    if (err) res.send(err);
    res.json(items);
  })
});

module.exports = router;
