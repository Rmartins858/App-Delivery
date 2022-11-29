module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  },
  {
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'saleId',
      otherKey: 'productId',
      through: SalesProduct,
      as: 'sales',
    });

    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: SalesProduct,
      as: 'products',
    });
  };

  return SalesProduct;
};