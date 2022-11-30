const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();
const userController = new UserController();

router.post('/login', (req, res, next) => userController.login(req, res, next));

module.exports = router;