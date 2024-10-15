"use client";
import {updateQuantity} from "@/store/slices/CartSlice";
import {updateCartData} from "@/actions/CartActions";
import {Minus} from "lucide-react";
import {AppDispatch} from "@/interfaces/store/store";
import {useDispatch} from "react-redux";
import {ProductProps} from "@/interfaces/Product";

export default function DecreaseButton({item}: { item: any }) {

    const dispatch: AppDispatch = useDispatch();


    return (
        <button onClick={async () => {
            dispatch(updateQuantity({quantity: -1, id: item.product.id}));
            await updateCartData(item.product.id, item.quantity - 1);

        }}
                className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
            <Minus className="w-4 h-4"/>
        </button>
    );
}