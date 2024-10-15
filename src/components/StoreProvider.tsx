"use client";
import {StateStore} from "@/store/store";
import {Provider} from "react-redux";

export const StoreProvider = ({children}: any) => {
    return (
        <Provider store={StateStore}>
            {children}
        </Provider>
    );
}