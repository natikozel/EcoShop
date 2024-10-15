export interface ProductProps {
    id?: string,
    v?: number | null,
    category?: string,
    name?: string,
    price?: number,
    images?: string[],
    amount?: number,
    description?: string,
    cartProducts?: cartProduct[]
}

export interface cartProduct {
    id: string;
    cartId: string;
    productId: string;
    quantity: number;
}