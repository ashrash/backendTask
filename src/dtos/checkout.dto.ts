import {  IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CheckoutCart {
    @IsNumber()
    @IsNotEmpty()
    public userId: number;

    @IsNumber()
    @IsNotEmpty()
    public cartId: number;
}

class CartItem {
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    public productId: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    public quantity: number;
}


export class AddToCart {
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    public userId: number;

    @IsNotEmpty()
    public cartItems: CartItem[];
}

