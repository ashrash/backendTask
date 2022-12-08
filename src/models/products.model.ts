const Products = (sequelize, DataTypes) => {
    const Products = sequelize.define(
      "Products",
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true
        },
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        pictureUrl: { type: DataTypes.STRING },
        price: { type: DataTypes.DECIMAL(10, 2) },
        quantity: { type: DataTypes.INTEGER },
      },
      {
        createdAt: "createdDate",
        updatedAt: "updatedDate"
      }
    );
    return Products;
};

export default Products;