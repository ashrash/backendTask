import {  IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CheckoutCart {
    @IsNumber()
    @IsNotEmpty()
    public userId: number;

    @IsNumber()
    @IsNotEmpty()
    public cartId: number;
}


export class AddToCart {
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    public userId: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    public productId: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    public quantity: number;
}