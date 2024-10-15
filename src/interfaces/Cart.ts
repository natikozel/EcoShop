import {cartProduct} from "@/interfaces/Product";

export interface Cart {
    cartProducts: cartProduct[];
    id: string;
    userId: string;

}