import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartSliceProps} from "@/interfaces/store/CartSliceProps";
import {ProductProps} from "@/interfaces/Product";


const initialState: any = {
    items: [],
};


const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<any>) {
            const isExist: any = state.items.find((item: any) => item.product.id === action.payload.id);
            if (isExist && isExist.quantity) {
                isExist.quantity++;
                return;
            }
            state.items.push({
                quantity: 1,
                product: {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    images: action.payload.images,
                    amount: action.payload.amount,
                    description: action.payload.description,
                    category: action.payload.category
                }
            });
        },
        updateQuantity(state, action) {

            const item = state.items.find((item: any) => item.product.id === action.payload.id);

            if (item)
                item.quantity = Math.max(0, item.quantity + action.payload.quantity);

            if (item?.quantity === 0) {
                state.items = state.items.filter((item: any) => item.product.id !== action.payload.id);
            }

        },
        replaceCart(state, action) {
            state.id = action.payload.id
            state.items = action.payload.cartProducts.map((item: any) => {
                return {
                    quantity: item.quantity,
                    product: {
                        id: item.product.id,
                        name: item.product.name,
                        price: item.product.price,
                        images: item.product.images,
                        amount: item.product.amount,
                        description: item.product.description,
                        category: item.product.category
                    }
                };
            });
        }

    }
});

export const {addToCart, replaceCart, updateQuantity} = CartSlice.actions;
export default CartSlice.reducer;