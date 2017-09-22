var express = require('express');
var router = express.Router();
var Product = require('./product.model');

/* GET products */
router.get('/', function (req, res, next) {
  Product.find((err, products) => {
    if (err) res.send(err);
    res.json(products);
  })
});

router.get('/:product_id', function (req, res, next) {
  Product.findById(req.params.product_id, (err, item) => {
    if (err) res.send(err);
    res.json(item);
  })
});

module.exports = router;
