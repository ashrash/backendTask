module.exports = {
    up: (queryInterface) => {
      return queryInterface.bulkInsert('User', [{
        name: 'John',
        username: 'johndoe',
        balance: 100,
        address: 'johndoe@example.com',
        createdDate: new Date(),
        updatedDate: new Date()
      },
      {
        name: 'test',
        username: 'testuser',
        balance: 500,
        address: 'testuser@example.com',
        createdDate: new Date(),
        updatedDate: new Date()
      }]);
    },
    down: (queryInterface) => {
      return queryInterface.bulkDelete('User', null, {});
    }
};