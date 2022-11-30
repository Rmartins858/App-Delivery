const express = require('express');
const ProductController = require('../controllers/product.controller');

const router = express.Router();
const productController = new ProductController();

router.get('/customer/products', (req, res, next) => productController.getAll(req, res, next));

module.exports = router;