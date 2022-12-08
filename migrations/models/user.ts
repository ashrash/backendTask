/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    balance: DataTypes.DECIMAL(10,2),
    createdDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};