export default interface Order {
    id: number;
    userId: number;
    productId: number;
    totalPrice: number;
    createdDate: Date;
    updatedDate: Date;
}