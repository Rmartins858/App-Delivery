module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING(200),
  },
  {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, {
      foreignKey: 'productId',
      as: 'sales',
    });
  };

  return Product;
};