import { Op } from 'sequelize';
import { logger } from '../utils/logger';
import { Product, ProductData, ProductSearch } from '../interfaces/product.interface';
import sequelize from '../models';
import { HttpException } from '../utils/exception';

class CheckoutService {
  public productModel = sequelize.Products;

  async saveProduct(request: Product): Promise<ProductData> {
    try {

    } catch(e) {
      logger.error(`Error occured at: saveProduct ${JSON.stringify(e)}`);
      throw new HttpException(500, `Something went wrong ${e}`);
    }
  }
}

export default CheckoutService;
