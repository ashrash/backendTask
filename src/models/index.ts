import { Sequelize, DataTypes } from 'sequelize';
import Products from './products.model';
import Cart from './cart.model';
import OrderItem from './orderItem.model';
import User from './user.model';
import Checkout from './checkout.model';

import { DB_HOST, DB_PASSWORD, DB_USERNAME } from '../config';


const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}`);

const databaseObj = {
    sequelize,
    Products : Products(sequelize, DataTypes),
    Cart : Cart(sequelize, DataTypes),
    OrderItem : OrderItem(sequelize, DataTypes),
    User : User(sequelize, DataTypes),
    Checkout : Checkout(sequelize, DataTypes),
};

databaseObj.Cart.hasMany(databaseObj.Checkout, {
    foreignKey: 'cartId'
});

databaseObj.User.hasMany(databaseObj.Checkout, {
    foreignKey: 'userId'
});

databaseObj.User.hasMany(databaseObj.Cart, {
    foreignKey: 'userId'
});

databaseObj.Cart.hasMany(databaseObj.OrderItem, {
    foreignKey: 'cartId'
});

databaseObj.Products.hasMany(databaseObj.OrderItem, {
    foreignKey: 'productId'
});

export default databaseObj;