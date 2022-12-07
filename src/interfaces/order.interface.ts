export default interface Order {
    id: number;
    userId: number;
    totalPrice: number;
    createdDate: Date;
    updatedDate: Date;
}