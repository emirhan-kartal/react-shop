export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    type?: string;
    stock: number;
    productInfo: ProductInfo;
    onDiscount: boolean;
    discountPrice?: number;
    discountStartDate?: string;
    discountEndDate?: string;
    specialFilterProps: SpecialFilterProps;
    date: string;
}

export interface ProductInfo {
    [key: string]: string | Review[] | undefined;
    details: string;
    reviews: Review[];
    shipping: string;
    returns: string;
}

export interface Review {
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
}

export interface SpecialFilterProps {
    [key: string]:string|undefined;
    brand?: string;
    gender?: "male" | "female" |string;
    color?: string;
    size?: string;

}
export interface ProductCategory {
    name: string;
    products: Product[];
}
