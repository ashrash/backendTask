/* eslint-disable no-undef */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      title: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      pictureUrl: { type: Sequelize.STRING },
      price: { type: Sequelize.DECIMAL(10, 2) },
      quantity: { type: Sequelize.INTEGER },
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
  async down(queryInterface) {
    await queryInterface.dropTable('Products');
  }
};