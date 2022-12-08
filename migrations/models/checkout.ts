/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Checkout extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
      }
    }
    Checkout.init({
      id: DataTypes.INTEGER,
      userId: DataTypes.BIGINT,
      cartId: DataTypes.BIGINT,
      checkoutStatus: DataTypes.STRING,
      createdDate: DataTypes.DATE,
      updatedDate: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'Checkout',
    });
    return Checkout;
  };