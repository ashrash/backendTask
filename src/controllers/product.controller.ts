import ProductService from '../services/product.service';
import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';
import { ProductData } from '@/interfaces/product.interface';

class ProductController {
  productService = new ProductService();

  public searchProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info('getAllProducts fetch started');
      const result: ProductData[] = await this.productService.searchProducts(req.body);
      if(result) {
        res.status(200).json(result || '');
      } else {
        res.status(204);
      }
    } catch (e) {
      logger.error(`Exception in: getAllProducts : ${JSON.stringify(e)}`);
      next(e);
    }
  }

  public saveProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info('saveProduct fetch started');
      const result: ProductData = await this.productService.saveProduct(req.body);
      res.status(201).json(result);
    } catch (e) {
      logger.error(`Exception in: saveProduct : ${JSON.stringify(e)}`);
      next(e);
    }
  }
}

export default ProductController;
