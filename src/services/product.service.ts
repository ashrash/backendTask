import { Op } from 'sequelize';
import { logger } from '../utils/logger';
import { Product, ProductData, ProductSearch } from '../interfaces/product.interface';
import sequelize from '../models';
import { HttpException } from '../utils/exception';

class ProductService {
  public productModel = sequelize.Products;

  async searchProducts(request: ProductSearch): Promise<ProductData[]> {
    const { title, description, sortField, sortDirection } = request;
    try {
      const query = {
        where: {
          [Op.and]: [
            { title: { [Op.like]:`${title ?? '%'}%` } },
            { description: {[Op.like]: `${description ?? '%'}%`} }
          ]
        },
        order: sortField ? [[ sortField, sortDirection ?? '']] : []
      };
      
      const results: ProductData[] = await this.productModel.findAll(query);

      if(results.length>0) {
        return results;
      }
      return null;

    } catch(e) {
      logger.error(`Error occured at: Search Products ${JSON.stringify(e)}`);
      throw new HttpException(500, `Something went wrong ${e}`);
    }
  }

  async saveProduct(request: Product): Promise<ProductData> {
    try {
      const createdProduct: ProductData = await this.productModel.create(request,
        { fields: ['title', 'description', 'pictureUrl', 'price', 'quantity'] });

      return createdProduct;
    } catch(e) {
      logger.error(`Error occured at: saveProduct ${JSON.stringify(e)}`);
      throw new HttpException(500, `Something went wrong ${e}`);
    }
  }
}

export default ProductService;
