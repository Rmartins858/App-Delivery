const SaleService = require("../services/sale.service");

class SaleController {
  service = new SaleService();

  async getAll(req, res, next) {
    try {
      const { userId } = req;
      const allOrders = await this.service.getAll(userId);
      return res.status(200).json(allOrders);
    } catch (e) {
      next(e);
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const order = await this.service.getOne(id)
      return res.status(200).json(order)
    } catch (e) {
      next(e)
    }
  }

  
  async create(req, res, next) {
    try {
      await this.service.create(req.body);
      return res.sendStatus(201)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = SaleController;