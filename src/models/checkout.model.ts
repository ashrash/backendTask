const Checkout = (sequelize, DataTypes) => {
    const Checkout = sequelize.define(
      "Checkout",
      {
        id: {
          type: DataTypes.BIGINT,
          unique: true,
          primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
        },
        cartId: {
            type: DataTypes.INTEGER,
        },
        checkoutStatus: {
            type: DataTypes.STRING,
            allowNull: false,
        }
      },
      {
        createdAt: "createdDate",
        updatedAt: "updatedDate",
        freezeTableName: true
      }
    );
    return Checkout;
};

export default Checkout;