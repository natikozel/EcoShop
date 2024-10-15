import {configureStore} from "@reduxjs/toolkit";
import SectionSlice from "@/store/slices/SectionSlice";
import CartSlice from "@/store/slices/CartSlice";
import AuthSlice from "@/store/slices/AuthSlice";


export const StateStore = configureStore({
    reducer: {
        section: SectionSlice,
        cart: CartSlice,
        auth: AuthSlice,
    }
});
