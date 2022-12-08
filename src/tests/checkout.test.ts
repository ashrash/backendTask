import chai from 'chai';
import chaiHttp from 'chai-http';
import {     userNotFound,
  productNotFound, productLowStock } from './mock/checkout';
import 'mocha';

chai.use(chaiHttp)

describe('Checkout API Request', () => {
  it('AddtoCart user not found', () => {
    return chai.request('http://localhost:3000').post('/checkout/addToCart')
    .send(userNotFound)
      .then(res => {
        const { message } = res.body;
        chai.expect(res.body).has.property('message');
        chai.expect(res.status).to.be.equal(400);
        chai.expect(message).to.be.equal(`User not found for user id: ${userNotFound.userId}`);
    });
  });

  it('AddtoCart product not found', () => {
    const productId = productNotFound.cartItems[0].productId;
    return chai.request('http://localhost:3000').post('/checkout/addToCart')
    .send(productNotFound)
      .then(res => {
        const { message } = res.body;
        chai.expect(res.body).has.property('message');
        chai.expect(res.status).to.be.equal(400);
        chai.expect(message).to.be.equal(`Product not found for product id: ${productId}`);
    });
  });

  it('AddtoCart product low on stock', () => {
    return chai.request('http://localhost:3000').post('/checkout/addToCart')
    .send(productLowStock)
      .then(res => {
        const { message } = res.body;
        chai.expect(res.body).has.property('message');
        chai.expect(res.status).to.be.equal(400);
        chai.expect(message)
        .contains(`Product low on stock: Available quatity:`);
    });
  });
})