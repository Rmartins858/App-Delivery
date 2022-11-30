const LoginService = require("../services/user.service");

class LoginController {
  service = new LoginService();

  async login(req, res, next) {
    try {
      const token = await this.service.login(req.body);
      return res.status(200).json({ token });
    } catch (e) {
      next(e);
    }
  }

  async register(req, res, next) {
    try {
      await this.service.register(req.body)
      return res.status(201).json({message: 'Account created successfully!'})
    } catch (e) {
      next(e)
    }
  }
}

module.exports = LoginController;