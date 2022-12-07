/* eslint-disable */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItem', {
      productId: { type: Sequelize.BIGINT,
        allowNull: false,
        references: {         
          model: 'Products',
          key: 'id'
        } 
      },
      cartId: { type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Cart',
          key: 'id'
        } 
      },
      quantity: { type: Sequelize.INTEGER, allowNull: false },
      createdDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedDate: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderItem');
  }
};