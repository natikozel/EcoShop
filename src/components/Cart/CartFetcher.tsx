"use server";
import CartDrawer from "@/components/Cart/CartDrawer";
import {getCartData} from "@/actions/CartActions";

export default async function CartFetcher() {

    let cart = await getCartData();
    return <CartDrawer cart={cart}/>;
}