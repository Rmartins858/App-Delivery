const ProductController = require("../controllers/product.controller");
const { Sale, SalesProduct } = require("../database/models");

class SaleService {
  saleModel = Sale;
  salesProductModel = SalesProduct;

  async getAll(userId) {
    const allOrders = await this.saleModel.findAll({ where: { userId } });
    return allOrders;
  }

  async getOne(id) {
    const order = await this.saleModel.findOne({ where: { id } });
    return order;
  }

  async create({ saleData, saleProducts }) {
    console.log('oi')
    const { id } = await this.saleModel.create(saleData);
    console.log(id)

    if (!id) throw { status: 409, message: "Erro ao cadastrar pedido" };

    await Promise.all(
      saleProducts.map(
        (product) => 
          this.salesProductModel.create({
            saleId: id,
            productId: product.id,
            quantity: product.qty,
          })
        
      )
    )    
  }
}

module.exports = SaleService;
