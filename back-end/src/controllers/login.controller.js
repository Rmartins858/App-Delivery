const LoginService = require("../services/login.service");

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
}

module.exports = LoginController;