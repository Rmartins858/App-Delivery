const { User } = require('../database/models');
const { createToken } = require('../utils/JWT');
const md5 = require('md5');

class LoginService {
  model = User;

  async login({ email, password }) {
    const foundUser = await this.model.findOne({ where: { email }});

    if (!foundUser) throw { status: 404, message: 'Incorrect email or password' };

    const isPasswordValid = md5(password) === foundUser.password;

    if (!isPasswordValid) throw { status: 404, message: 'Incorrect email or password' };

    const { id, role } = foundUser;

    const token = createToken({ id, role });
    return token;
  }
}

module.exports = LoginService;