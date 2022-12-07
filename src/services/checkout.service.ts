import { logger } from '../utils/logger';
import sequelize from '../models';
import bigDecimal from 'js-big-decimal';
import { HttpException } from '../utils/exception';
import Checkout from '../interfaces/checkout.interfact';
import { AddCart, AddCartResponse, Cart } from '../interfaces/cart.interface';
import { Product } from '@/interfaces/product.interface';
import ProductService from './product.service';
import UserService from './user.service';

class CheckoutService {
  public productService = new ProductService();
  public userService = new UserService();
  public productModel = sequelize.Products;
  public orderItemModel = sequelize.OrderItem;
  public cartModel = sequelize.Cart;

  async addToCart(request: AddCart): Promise<AddCartResponse> {
      const { userId, productId, quantity }: AddCart = request;

      const user = await this.userService.findUserById(userId);
      if(!user) {
        throw new HttpException(400, `User not found for user id: ${userId}`);
      }

      const product = await this.productService.findProductById(productId);
      if(!product) {
        throw new HttpException(400, `Product not found for product id: ${productId}`);
      }
      const { quantity: stockLevel, price }: Product = product;
      if(stockLevel < quantity) {
        throw new HttpException(400, `Product low on stock: Available quatity: ${stockLevel}; Requested quantity: ${quantity}`);
      }

      let shoppingCart: Cart = await this.cartModel.findOne({
        where: {
          userId,
        }
      });

      if(!shoppingCart) {
        const newCart = {
          userId,
          totalPrice: 0,
        }
        shoppingCart = await this.cartModel.create(newCart,
          { fields: ['userId', 'totalPrice'] });
      }
      const { id: cartId, totalPrice }: Cart = shoppingCart;

      await this.orderItemModel.create({productId, cartId, quantity },
        { fields: ['productId', 'cartId', 'quantity'] });

      const totalCost = bigDecimal.multiply(price, quantity);
      const newTotal: number = parseFloat(bigDecimal.add(totalPrice, totalCost));

      await this.cartModel.update({ totalPrice: newTotal}, {
        where: {
          id: cartId, 
        }
      })
      return {
        cartId,
        totalPrice: newTotal,
        userId,
      };
  }

  async checkout(request: Checkout): Promise<Checkout> {
    try {
      const { userId, cartId }: Checkout = request;
      const data = this.cartModel.findOne({
        where: {
          id: cartId
        }
      })
      return data;
    } catch(e) {
      logger.error(`Error occured at: checkout ${JSON.stringify(e)}`);
      throw new HttpException(500, `Something went wrong ${e}`);
    }
  }
}

export default CheckoutService;
