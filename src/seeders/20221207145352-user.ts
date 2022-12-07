module.exports = {
    up: (queryInterface) => {
      return queryInterface.bulkInsert('User', [{
        name: 'John',
        username: 'johndoe',
        address: 'example@example.com',
        createdDate: new Date(),
        updatedDate: new Date()
      }]);
    },
    down: (queryInterface) => {
      return queryInterface.bulkDelete('User', null, {});
    }
};