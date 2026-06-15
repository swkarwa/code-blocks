
export interface ProductList {
    responseCode: number;
    products: Product[];
}

export interface Product {
    id: number;
    name: string;
    price: string;
    brand: string;
    category: Category;
}

export interface Category {
    usertype: UsertypeClass;
    category: string;
}

export interface UsertypeClass {
    usertype: UsertypeEnum;
}

export enum UsertypeEnum {
    Kids = "Kids",
    Men = "Men",
    Women = "Women",
}