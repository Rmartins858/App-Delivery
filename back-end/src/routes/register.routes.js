const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();
const userController = new UserController();

router.post('/register', (req, res, next) => userController.register(req, res, next));

module.exports = router;