const ProductService = require("../services/product.service");

class ProductController {
  service = new ProductService();

  async getAll(req, res, next) {
    try {
      const allProducts = await this.service.getAll();
      return res.status(200).json(allProducts);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = ProductController;