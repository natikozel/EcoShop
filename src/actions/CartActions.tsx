"use server";

import {ProductProps} from "@/interfaces/Product";
import {getServerSession} from "next-auth";
import {getCart, updateCart} from "@/lib/dbUtil";
import {debounce} from "lodash";
import {revalidatePath} from "next/cache";
import {authOptions} from "@/app/options";

export const handleProductAddition = async (product: ProductProps) => {
    const session = await getServerSession(authOptions);
    await updateCart(session!.user!.userId, product!.id!);
    revalidatePath('/cart');
};

export const getCartData = async () => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return;
    }
    return await getCart(session.user.userId);
};

const debouncedUpdateCartData = debounce(async function updateCartData(productId: string, quantity: number) {
    const session = await getServerSession(authOptions);
    if (session)
        await updateCart(session.user?.userId, productId, quantity);
}, 500);


export async function updateCartData(productId: string, quantity: number) {
    await debouncedUpdateCartData(productId, quantity);
}

