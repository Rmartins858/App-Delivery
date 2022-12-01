const express = require('express');
const ProductController = require('../controllers/product.controller');
const SaleController = require('../controllers/sale.controller');
const UserController = require('../controllers/user.controller');
const JWT = require('../middlewares/auth.middleware');

const router = express.Router();
const productController = new ProductController();
const saleController = new SaleController();
const userController = new UserController();

router.post('/login', (req, res, next) => userController.login(req, res, next));
router.post('/register', (req, res, next) => userController.register(req, res, next));
router.get('/sellers', (req, res, next) => userController.getSellers(req, res, next));
router.get('/products', (req, res, next) => productController.getAll(req, res, next));
router.post('/orders', JWT, (req, res, next) => saleController.create(req, res, next));
router.get('/orders', JWT, (req, res, next) => saleController.getAll(req, res, next));
router.get('/orders/:id', JWT, (req, res, next) => saleController.getOne(req, res, next));

module.exports = router;