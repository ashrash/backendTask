export interface OrderItem {
    productId: number;
    orderId: number;
    quantity: number;
    createdDate: Date;
    updatedDate: Date;
}

export interface Cart {
    userId: number;
    orderId: number;
}