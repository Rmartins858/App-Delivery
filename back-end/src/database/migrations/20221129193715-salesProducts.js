'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      sale_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model: 'sales',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      product_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model: 'products',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('salesProducts');

  }
};
