export interface OrderItem {
    productId: number;
    cartId: number;
    quantity: number;
    createdDate: Date;
    updatedDate: Date;
}

export interface Cart {
    userId: number;
    cartId: number;
}

