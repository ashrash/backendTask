module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Cart', [{
      userId: 1,
      totalPrice: 100,
      createdDate: new Date(),
      updatedDate: new Date()
    }]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Cart', null, {});
  }
};