const { Product } = require('../database/models');

class ProductService {
  constructor() {
    this.model = Product;
  }

  async getAll() {
    const allProducts = await this.model.findAll();
    return allProducts;
  }
}

module.exports = ProductService;