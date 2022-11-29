const express = require('express');
const LoginController = require('../controllers/login.controller');

const router = express.Router();
const loginController = new LoginController();

router.post('/login', (req, res, next) => loginController.login(req, res, next));

module.exports = router;