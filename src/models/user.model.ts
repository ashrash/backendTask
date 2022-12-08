const User = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true
        },
        username: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        address: { type: DataTypes.STRING },
        balance: { type: DataTypes.DECIMAL(10, 2) }
      },
      {
        createdAt: "createdDate",
        updatedAt: "updatedDate",
        freezeTableName: true
      }
    );
    return User;
};

export default User;