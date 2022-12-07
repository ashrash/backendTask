/* eslint-disable @typescript-eslint/no-var-requires */
const productData = require('./seed/product.json');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Products', productData);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};