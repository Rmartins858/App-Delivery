const UserService = require('../services/user.service');

class UserController {
  constructor() {
    this.service = new UserService();
  }

  async login(req, res, next) {
    try {
      const loggedUser = await this.service.login(req.body);
      return res.status(200).json(loggedUser);
    } catch (e) {
      next(e);
    }
  }

  async register(req, res, next) {
    try {
      const newUser = await this.service.register(req.body);
      return res.status(201).json(newUser);
    } catch (e) {
      next(e);
    }
  }

  async admRegister(req, res, next) {
    if (req.userRole !== 'administrator') {
      return res.sendStatus(403);
    }

    try {
      await this.service.register(req.body);
      return res.status(201).json({ message: 'Account created successfully!' });
    } catch (e) {
      next(e);
    }
  }

  async getSellers(_req, res, next) {
    try {
      const sellers = await this.service.getSellers();
      return res.status(200).json(sellers);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = UserController;