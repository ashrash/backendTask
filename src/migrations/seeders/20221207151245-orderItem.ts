module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('OrderItem', [{
      productId: 1,
      orderId: 1,
      quantity: 2,
      createdDate: new Date(),
      updatedDate: new Date()
    },{
      productId: 2,
      orderId: 1,
      quantity: 3,
      createdDate: new Date(),
      updatedDate: new Date()
    }]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('OrderItem', null, {});
  }
};