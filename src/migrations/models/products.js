/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    pictureUrl: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    quantity: DataTypes.INTEGER,
    createdDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};