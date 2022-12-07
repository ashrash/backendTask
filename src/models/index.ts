import { Sequelize, DataTypes } from 'sequelize';
import Products from './products.model';
import Order from './order.model';
import OrderItem from './orderItem.model';
import user from './user.model';
import { DB_HOST, DB_PASSWORD, DB_USERNAME } from '../config';

console.log(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/myos`);

const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/myos`);

const databaseObj = {
    sequelize,
    Products : Products(sequelize, DataTypes),
    Order : Order(sequelize, DataTypes),
    OrderItem : OrderItem(sequelize, DataTypes),
    user : user(sequelize, DataTypes),
};

databaseObj.Products.hasMany(databaseObj.Order, {
    foreignKey: 'productId'
});

databaseObj.user.hasMany(databaseObj.Order, {
    foreignKey: 'userId'
});

databaseObj.Order.hasMany(databaseObj.OrderItem, {
    foreignKey: 'orderId'
});

databaseObj.Products.hasMany(databaseObj.OrderItem, {
    foreignKey: 'productId'
});

export default databaseObj;