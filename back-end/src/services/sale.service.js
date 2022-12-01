const { Sale, SalesProduct, Product, User } = require('../database/models');

class SaleService {
  constructor() {
    this.saleModel = Sale;
    this.salesProductModel = SalesProduct;
  }

  async getAll(data) {
    const allOrders = await this.saleModel.findAll({
      where: data,
      include: [],
    });
    return allOrders;
  }

  async getOne(id) {
    const order = await this.saleModel.findOne({
      where: { id },
      include: [
        { model: Product, as: 'products', through: { attributes: ['quantity'] } },
        { model: User, as: 'seller', attributes: ['name'] },
      ],
    });

    return order;
  }

  async create({ saleData, saleProducts }) {
    const { id } = await this.saleModel.create(saleData);

    if (!id) {
      const err = { status: 409, message: 'Erro ao cadastrar pedido' };
      throw err;
    }

    await Promise.all(
      saleProducts.map(
        (product) => 
          this.salesProductModel.create({
            saleId: id,
            productId: product.id,
            quantity: product.qty,
          }),
      ),
    );   
  }
}

module.exports = SaleService;
