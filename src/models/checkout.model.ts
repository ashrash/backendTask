const Checkout = (sequelize, DataTypes) => {
    const Checkout = sequelize.define(
      "Checkout",
      {
        id: {
          type: DataTypes.BIGINT,
          unique: true,
          primaryKey: true
        },
        productId: { type: DataTypes.BIGINT },
        quantity: { type: DataTypes.INTEGER },
      },
      {
        createdAt: "createdDate",
        updatedAt: "updatedDate"
      }
    );
    return Checkout;
};

export default Checkout;