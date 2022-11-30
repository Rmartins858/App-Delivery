const { User } = require('../database/models');
const { createToken } = require('../utils/JWT');
const md5 = require('md5');
const { Op } = require('sequelize');

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

  async register({ name, email, password, role }) {
    const foundUser = await this.model.findOne({ where: { [Op.or]: [ { email }, { name } ] }});
    console.log('oi')

    if(foundUser) throw { status: 409, message: 'User already exists'}

    const newUser = await this.model.create({name, email, password: md5(password), role })
    return newUser;
  }
}

module.exports = LoginService;