const OrderItem = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define(
      "OrderItem",
      {
        productId: { type: DataTypes.BIGINT },
        cartId: { type: DataTypes.BIGINT },
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
