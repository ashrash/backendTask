import { AddToCart, CheckoutCart } from '../dtos/checkout.dto';
import validationMiddleware from '../middleware/validation.middleware';
import { Router } from 'express';
import CheckoutController from '../controllers/checkout.controller';

class CheckoutRoute {
  route = '/checkout';
  router = Router();
  checkoutController = new CheckoutController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.route}/addToCart`, validationMiddleware(AddToCart, 'body'),
     this.checkoutController.addToCart)
    this.router.post(`${this.route}`, validationMiddleware(CheckoutCart, 'body'),
     this.checkoutController.checkout)
  }
}

export default CheckoutRoute;
