import sequelize from '../models';
import bigDecimal from 'js-big-decimal';
import { HttpException } from '../utils/exception';
import { Checkout, CheckoutRequest } from '../interfaces/checkout.interfact';
import { AddCart, AddCartResponse, Cart, CartItem } from '../interfaces/cart.interface';
import { Product } from '@/interfaces/product.interface';
import ProductService from './product.service';
import UserService from './user.service';
import User from '@/interfaces/user.interface';

class CheckoutService {
  public productService = new ProductService();
  public userService = new UserService();
  public productModel = sequelize.Products;
  public orderItemModel = sequelize.OrderItem;
  public checkoutModel = sequelize.Checkout;
  public cartModel = sequelize.Cart;

  async addToCart(request: AddCart): Promise<AddCartResponse> {
      const { userId, cartItems }: AddCart = request;

      const user = await this.userService.findUserById(userId);
      if(!user) {
        throw new HttpException(400, `User not found for user id: ${userId}`);
      }

      const newCart = {
        userId,
        totalPrice: 0,
      }

      const shoppingCart: Cart = await this.cartModel.create(newCart,
        { fields: ['userId', 'totalPrice'] });

      const { id: cartId }: Cart = shoppingCart;
      let totalPrice = 0;
      await Promise.all(cartItems.map(async ({ productId, quantity }: CartItem)=> {
        const product = await this.productService.findProductById(productId);
        if(!product) {
          throw new HttpException(400, 
            `Product not found for product id: ${productId}`);
        }
        const { quantity: stockLevel, price }: Product = product;
        if(stockLevel < quantity) {
          throw new HttpException(400,
            `Product low on stock: Available quatity: ${stockLevel}; Requested quantity: ${quantity}`);
        }
        await this.orderItemModel.create({productId, cartId, quantity },
          { fields: ['productId', 'cartId', 'quantity'] });
        totalPrice =  parseFloat(bigDecimal.add(totalPrice, bigDecimal.multiply(price, quantity)));
      }));

      await this.cartModel.update({ totalPrice }, { where: { id: cartId } });

      return {
        cartId,
        totalPrice,
        userId,
      };
  }

  async paymentStatusUpdate(userId:number, cartId:number, checkoutStatus: string): Promise<Checkout> {
    return this.checkoutModel.create({userId, cartId, checkoutStatus, },
    { fields: ['userId', 'cartId', 'checkoutStatus'] });
  }

  async checkout(request: CheckoutRequest): Promise<Checkout> {
      const { userId, cartId }: CheckoutRequest = request;

      const user: User = await this.userService.findUserById(userId);
      if(!user) {
        throw new HttpException(400, `User not found for user id: ${userId}`);
      }

      const cart: Cart = await this.cartModel.findOne({ where: { id: cartId } })
      if(!cart) {
        throw new HttpException(400, `cart not found for cart id: ${cartId}`);
      }

      const { balance }: User = user;
      const { totalPrice }: Cart = cart;

      if(bigDecimal.compareTo(balance ,totalPrice) < 0) {
        await this.paymentStatusUpdate(userId, cartId, 'Insufficient funds');
        throw new HttpException(400, `Insufficient funds balance: ${balance}; total: ${totalPrice}`);
      }

      try {
        const remainder: number = parseFloat(bigDecimal.subtract(balance, totalPrice));
        await this.userService.updateBalance(userId, remainder);
        const checkout: Checkout = await this.paymentStatusUpdate(userId, cartId, 'Successful');
        return checkout;
      } catch(e){
        await this.userService.updateBalance(userId, balance);
        await this.paymentStatusUpdate(userId, cartId, 'Payment Failed');
      }
  }
}

export default CheckoutService;
