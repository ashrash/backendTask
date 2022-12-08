const userNotFound = {
    userId: 999,
    cartItems: [
        {
              productId: 1,
              quantity: 1
        }
    ]
};

const productNotFound = {
    userId: 2,
    cartItems: [
        {
              productId: 200,
              quantity: 1
        }
    ]
};


const productLowStock = {
    userId: 2,
    cartItems: [
        {
              productId: 1,
              quantity: 200
        }
    ]
};

export {
    userNotFound,
    productNotFound,
    productLowStock
}