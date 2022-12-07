const OrderItem = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define(
      "OrderItem",
      {
        productId: { type: DataTypes.BIGINT },
        orderId: { type: DataTypes.BIGINT },
        quantity: { type: DataTypes.INTEGER },
      },
      {
        createdAt: "createdDate",
        updatedAt: "updatedDate"
      }
    );
    return OrderItem;
};

export default OrderItem;
