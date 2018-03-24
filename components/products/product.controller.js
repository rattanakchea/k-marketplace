var Product = require('./product.model');

var productCtrl = {};

// import { Product } from './product.model';  // ES6 need babel

function cb(res, err, obj) {
    if (err) res.send(err);
    res.json(res);
}

productCtrl.getProducts = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) res.send(err);
        res.json(products);
    })
};

// get product by ID
productCtrl.getProductById = (req, res) => {
    Product.findById(req.params.product_id, (err, item) => {
        if (err) res.send(err);
        res.json(item);
    })
};

// get product by category
productCtrl.getProductByCategory = (req, res) => {
    Product.find({category: req.params.product_cat}, (err, items) => {
        if (err) res.send(err);
        res.json(items);
      })
};

// Update product
productCtrl.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.product_id}, req.body, {new: true}, (err, product) => {
        if (err) res.send(err);
        res.json(product);
    })
};

// Delete product
productCtrl.deleteProduct = (req, res) => {
    Product.remove({_id: req.params.product_id}, (err, response) => {
        if (err) res.send(err);
        res.json({
            res: response,
            message: "successfully deleted product"
        });
    })
};

productCtrl.addNewProduct = (req, res) => {
    let newProduct = new Product(req.body);
    newProduct.save((err, product) => {
        if (err) res.send(err);

        res.json(product);
    });
};

module.exports = productCtrl;