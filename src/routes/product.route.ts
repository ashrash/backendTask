import { CreateProduct, SearchProduct } from '../dtos/product.dto';
import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validationMiddleware from '../middleware/validation.middleware';

class ProductRoute {
  route = '/product';
  router = Router();
  productController = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.route}/search`, validationMiddleware(SearchProduct, 'body'),
      this.productController.searchProducts);

    this.router.post(`${this.route}/`, validationMiddleware(CreateProduct, 'body'),
     this.productController.saveProduct);
  }
}

export default ProductRoute;
