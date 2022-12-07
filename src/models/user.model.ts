const User = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        id: {
          type: DataTypes.BIGINT,
          unique: true,
          primaryKey: true
        },
        username: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        address: { type: DataTypes.STRING },
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