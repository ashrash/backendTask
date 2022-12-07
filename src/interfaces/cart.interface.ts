export interface Cart {
    id: number;
    userId: number;
    totalPrice: number;
    createdDate: Date;
    updatedDate: Date;
}

export interface AddCart {
    userId: number;
    cartId: number;
    productId: number;
    quantity: number;
}

export interface AddCartResponse {
    cartId: number,
    totalPrice: number,
    userId: number,
}
