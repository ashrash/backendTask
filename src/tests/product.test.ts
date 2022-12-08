import chai from 'chai';
import chaiHttp from 'chai-http';
import { productNotFound, productFound, productFoundSort } from './mock/product';
import 'mocha';

chai.use(chaiHttp)

describe('Product API Request', () => {
  it('Product not found', () => {
    return chai.request('http://localhost:3000').post('/product/search')
    .send(productNotFound)
      .then(res => {
        chai.expect(res.status).to.be.equal(204);
    });
  });

  it('Product found', () => {
    return chai.request('http://localhost:3000').post('/product/search')
    .send(productFound)
      .then(res => {
        chai.expect(res.status).to.be.equal(200);
        chai.expect(res.body.length).to.be.equal(2);
    });
  });

  it('Product search sort', () => {
    return chai.request('http://localhost:3000').post('/product/search')
    .send(productFoundSort)
      .then(res => {
        const results = res.body;
        chai.expect(res.status).to.be.equal(200);
        chai.expect(res.body.length).to.be.equal(2);
        chai.expect(results[0].price).to.be.equal('84.00');
    });
  });
})