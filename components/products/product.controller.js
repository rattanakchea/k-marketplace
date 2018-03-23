var Product = require('./product.model');

var productCtrl = {
    addNewProduct: null
}
// import { Product } from './product.model';  // ES6 need babel
productCtrl.addNewProduct = (req, res) => {
    let newProduct = new Product(req.body);
    newProduct.save((err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
};

module.exports = productCtrl;