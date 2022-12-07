const user = (sequelize, DataTypes) => {
    const user = sequelize.define(
      "user",
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
        updatedAt: "updatedDate"
      }
    );
    return user;
};

export default user;