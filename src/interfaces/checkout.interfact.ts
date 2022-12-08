export interface Checkout {
    userId: number;
    cartId: number;
    checkoutStatus: string;
    createdDate: Date;
    updatedDate: Date;
}

export interface CheckoutRequest {
    userId: number;
    cartId: number;
}