module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING(50),
  },
  {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
    createdAt: 'saleDate',
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    Sales.belongsTo(models.User, {
      foreignKey: 'sellerId',
      as: 'seller',
    })
  };

  return Sales;
};