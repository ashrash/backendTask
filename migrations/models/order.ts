/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    id: DataTypes.INTEGER,
    userId: DataTypes.BIGINT,
    totalPrice: DataTypes.DECIMAL(10, 2),
    createdDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};