const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../database/models');
const { createToken } = require('../utils/JWT');

class UserService {
  constructor() {
    this.model = User;
  }

  async login({ email, password }) {
    const foundUser = await this.model.findOne({ where: { email } });

    if (!foundUser) {
      const err = { status: 404, message: 'Incorrect email or password' };
      throw err;
    }

    const isPasswordValid = md5(password) === foundUser.password;

    if (!isPasswordValid) {
      const err = { status: 404, message: 'Incorrect email or password' };
      throw err;
    }

    const { id, role, name } = foundUser;

    const token = createToken({ id, role });
    return { name, email, role, token, id };
  }

  async register({ name, email, password, role }) {
    const foundUser = await this.model.findOne({ where: { [Op.or]: [{ email }, { name }] } });

    if (foundUser) {
     const err = { status: 409, message: 'User already exists' };
     throw err;
    }

    const { id } = await this.model.create({ name, email, password: md5(password), role });
    const token = createToken({ id, role });
    return { name, email, role, token, id };
  }

  async getSellers() {
    const sellers = await this.model.findAll({
      where: { role: 'seller' },
      attributes: ['id', 'name'],
    });
    
    return sellers;
  }

  async getUsers() {
    const sellers = await this.model.findAll({
      where: {
        [Op.or]: [
          { role: 'seller' },
          { role: 'customer' },
        ],
      },
    });
    return sellers;
  }

  async deleteUser(id) {
    await this.model.destroy({ where: { id } });
  }
}

module.exports = UserService;