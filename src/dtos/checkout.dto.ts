import {  IsNotEmpty, IsNumber } from 'class-validator';

export class CheckoutCart {
    @IsNumber()
    @IsNotEmpty()
    public userId: number;

    @IsNumber()
    @IsNotEmpty()
    public orderId: number;
}