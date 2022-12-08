const OrderItem = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define(
      "OrderItem",
      {
        productId: { type: DataTypes.INTEGER },
        cartId: { type: DataTypes.INTEGER },
        quantity: { type: DataTypes.INTEGER },
      },
      {
        createdAt: "createdDate",
        updatedAt: "updatedDate",
        freezeTableName: true
      }
    );
    OrderItem.removeAttribute('id');

    return OrderItem;
};

export default OrderItem;
