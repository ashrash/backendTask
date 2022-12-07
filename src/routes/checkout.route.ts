import { CheckoutCart } from '@/dtos/checkout.dto';
import validationMiddleware from '@/middleware/validation.middleware';
import { Router } from 'express';
import ProductController from '../controllers/product.controller';

class CheckoutRoute {
  route = '/checkout';
  router = Router();
  productController = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.route}/checkout`, validationMiddleware(CheckoutCart, 'body'), )
  }
}

export default CheckoutRoute;
