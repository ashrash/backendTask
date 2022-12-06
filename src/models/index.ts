import { Sequelize, DataTypes } from 'sequelize';
import Products from './products.model';
import Checkout from './checkout.model';
import { DB_HOST, DB_PASSWORD, DB_USERNAME } from '../config';

console.log(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/myos`);

const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/myos`);

const databaseObj = {
    sequelize,
    Products : Products(sequelize, DataTypes),
    Checkout : Checkout(sequelize, DataTypes),
};

databaseObj.Products.hasMany(databaseObj.Checkout, {
    foreignKey: 'productId'
});


export default databaseObj;