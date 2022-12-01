const ProductService = require('../services/product.service');

class ProductController {
  constructor() {
    this.service = new ProductService();
  }

  async getAll(_req, res, next) {
    try {
      const allProducts = await this.service.getAll();
      return res.status(200).json(allProducts);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = ProductController;