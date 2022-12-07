const Order = (sequelize, DataTypes) => {
    const Order = sequelize.define(
      "Order",
      {
        id: {
          type: DataTypes.BIGINT,
          unique: true,
          primaryKey: true
        },
        userId: { type: DataTypes.BIGINT },
        quantity: { type: DataTypes.INTEGER },
      },
      {
        createdAt: "createdDate",
        updatedAt: "updatedDate"
      }
    );
    return Order;
};

export default Order;