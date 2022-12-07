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
      orderId: { type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'Order',
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