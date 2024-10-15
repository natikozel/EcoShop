"use server";
import {revalidatePath, unstable_cache as nextCache} from "next/cache";
import {getDb} from "@/lib/dbClient";
import {Cart} from "@/interfaces/Cart";
import {cartProduct, ProductProps} from "@/interfaces/Product";
import {getUserId} from "@/lib/AuthGuard";


export const getAllProductsByCategory = nextCache(async function getAllProductsByCategory(category?: string) {
    return getDb().product.findMany({
        where: {
            category
        }
    });

});

export const getProductById = nextCache(async function getProductById(id: string) {
    return getDb().product.findUnique({
        where: {
            id
        }
    });
});

export const isEmailExists = nextCache(async function isEmailExists(email: string) {
    return getDb().user.findFirst({
        where: {
            email
        }
    });
});

export const isProductInCart = async (cart: cartProduct[], productId: string) => cart.find(p => p.productId === productId);

export const getUserCart = async (userId: string) => {
    return getDb().cart.findFirst({
        where: {userId},
        include: {
            cartProducts: {
                include: {
                    product: true
                }
            }
        }
    });
};

export const removeProductFromCart = async (productId: string, cartId: string) => {
    return getDb().cartProduct.delete({
        where: {
            cartId_productId: {
                cartId,
                productId
            }
        }
    });
};

export const updateProductAmountInCart = async (productId: string, cartId: string, quantity: number) => {
    await getDb().cartProduct.upsert({
        where: {
            cartId_productId: {
                cartId,
                productId
            }
        },
        update: {
            quantity
        },
        create: {
            cartId,
            productId,
            quantity
        }
    });
};

export const incrementProductInCart = async (productId: string, cartId: string, quantity: number) => {
    await getDb().cartProduct.upsert({
        where: {
            cartId_productId: {
                cartId,
                productId
            }
        },
        update: {
            quantity: {increment: quantity}
        },
        create: {
            cartId,
            productId,
            quantity
        }
    });
};

export const updateCart = async (userId: string, productId: string, quantity: number = 1) => {

    const product: ProductProps | null = await getProductById(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    let fetchedCart: Cart | null = await getUserCart(userId);
    if (!fetchedCart) {
        throw new Error('Cart not found');
    }

    if (quantity === 1)
        await incrementProductInCart(productId, fetchedCart.id, quantity);
    else if (quantity > 0)
        await updateProductAmountInCart(productId, fetchedCart.id, quantity);
    else
        await removeProductFromCart(productId, fetchedCart.id);


    return await getCart(userId);
};


export const createUserCart = async (userId: string) => {
    return getDb().cart.create({
        data: {
            userId
        }
    });
};


export const getCart = async (userId: string) => {

    const cart = await getUserCart(userId);

    if (!cart) {
        await createUserCart(userId);
        return getUserCart(userId);
    }
    return cart;

};

export const getUserById = async (userId: string) => {
    return getDb().user.findFirst({
        where: {
            id: userId
        }
    });
};

export const likeProduct = async (userId: string, productId: string) => {

    const product = await getProductById(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    const user = await getUserById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const likedProduct = await getDb().likedProduct.findFirst({
        where: {
            userId,
            productId
        }
    });
    if (likedProduct) {
        await removeLikedProduct(userId, productId);
    } else {
        await addLikedProduct(userId, productId);
    }
    revalidatePath('/');
};

export const addLikedProduct = async (userId: string, productId: string) => {

    return getDb().likedProduct.create({
        data: {
            userId,
            productId
        }
    });
};

export const removeLikedProduct = async (userId: string, productId: string) => {
    return getDb().likedProduct.delete({
        where: {
            userId_productId: {
                userId,
                productId
            }
        }
    });
};

export const getUserLikedProducts = async (userId?: string) => {
    if (!userId) return [];
    return getDb().likedProduct.findMany({
        where: {
            userId
        }
    });
};


// return getDb().cart.findFirst({
//     where: {userId},
//     include: {
//         cartProducts: {
//             include: {
//                 product: true
//             }
//         }
//     }
// });

export const getUserOrders = async () => {
    const userId = await getUserId()
    if (!userId) return [];
    return getDb().order.findMany({
            where: {
                userId
            },
            include: {
                cart: {
                    include: {
                        cartProducts: {
                            include: {
                                product: true
                            }
                        }
                    }
                }
            }
        }
    );
}


export const createOrder = async (order: any) => {

    const {userId, cartId, ...rest} = order;

    if (!userId) throw new Error('User not found');
    if (!cartId) throw new Error('Cart not found');

    return getDb().order.create({
        data: {
            userId,
            cartId,
            ...rest
        }
    });

}
