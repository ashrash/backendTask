export interface Cart {
    id: number;
    userId: number;
    totalPrice: number;
    createdDate: Date;
    updatedDate: Date;
}

export interface CartItem {
    productId: number;
    quantity: number;
}

export interface AddCart {
    userId: number;
    cartId: number;
    cartItems: CartItem[];
}



export interface AddCartResponse {
    cartId: number,
    totalPrice: number,
    userId: number,
}
