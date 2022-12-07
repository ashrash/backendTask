import CheckoutService from '../services/checkout.service';
import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';
import Checkout from '../interfaces/checkout.interfact';
import { AddCartResponse } from '../interfaces/cart.interface';

class CheckoutController {
  checkoutService = new CheckoutService();

  public addToCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info('saveProduct fetch started');
      const result: AddCartResponse = await this.checkoutService.addToCart(req.body);
      res.status(201).json(result);
    } catch (e) {
      logger.error(`Exception in: saveProduct : ${JSON.stringify(e)}`);
      next(e);
    }
  }

  public checkout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info('saveProduct fetch started');
      const result: Checkout = await this.checkoutService.checkout(req.body);
      res.status(201).json(result);
    } catch (e) {
      logger.error(`Exception in: saveProduct : ${JSON.stringify(e)}`);
      next(e);
    }
  }
}

export default CheckoutController;
