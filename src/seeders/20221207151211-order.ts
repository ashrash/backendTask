module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Order', [{
      userId: 1,
      totalPrice: 100,
      createdDate: new Date(),
      updatedDate: new Date()
    }]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Order', null, {});
  }
};