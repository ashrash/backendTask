/* eslint-disable no-undef */
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Checkout', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        } 
      },
      cartId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Cart',
            key: 'id'
          } 
      },
      checkoutStatus: {
          type: Sequelize.STRING,
          allowNull: false,
      },
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
    await queryInterface.dropTable('Checkout');
  }
};