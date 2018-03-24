var express = require('express');
var router = express.Router();
var Product = require('./product.model');

// import { addNewProduct } from './product.controller';
var productCtrl = require('./product.controller');

/* GET products */
router.get('/', productCtrl.getProducts);

// GET Product by Id
router.get('/:product_id', productCtrl.getProductById);

// Delete product by Id
router.delete('/:product_id', productCtrl.deleteProduct);

// PUT update Product by Id
router.put('/:product_id', productCtrl.updateProduct);

/* POST add new product */
router.post('/', productCtrl.addNewProduct);

// get products by category
router.get('/category/:product_cat', productCtrl.getProductByCategory);

module.exports = router;
