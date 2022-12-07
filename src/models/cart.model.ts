const Cart = (sequelize, DataTypes) => {
    const Cart = sequelize.define(
      "Cart",
      {
        id: {
          type: DataTypes.BIGINT,
          unique: true,
          primaryKey: true
        },
        userId: { type: DataTypes.BIGINT },
        totalPrice: { type: DataTypes.INTEGER },
      },
      {
        createdAt: "createdDate",
        updatedAt: "updatedDate",
        freezeTableName: true
      }
    );
    return Cart;
};

export default Cart;