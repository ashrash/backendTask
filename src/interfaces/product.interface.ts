
export interface Product {
    title: string;
    description: string;
    pictureUrl: string;
    price: number;
    quantity: number;
}

export interface ProductData extends Product {
    createdDate: Date;
    updatedDate: Date;
}


export interface ProductSearch {
    title: string;
    description: string;
    sortField: string;
    sortDirection: number;
}
