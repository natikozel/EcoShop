"use client";

import {useSelector} from "react-redux";
import {RootState} from "@/interfaces/store/store";
import CheckoutButton from "@/components/Cart/CheckoutButton";
import IncreaseButton from "@/components/Cart/IncreaseButton";
import DecreaseButton from "@/components/Cart/DecreaseButton";

export default function CartItems({triggerDrawer}: { triggerDrawer?: () => void }) {

    const {items: cart} = useSelector((state: RootState) => state.cart);
    const totalCost = () => cart.reduce((total: number, item: any) => total + item?.product.price! * item?.quantity!, 0);

    return (
        <div className="flex flex-col max-h-dvh h-[calc(100vh-150px)] justify-between overflow-y-auto">
            <div>
                {cart.length === 0 ?
                    <p className="text-center text-gray-500">העגלה שלך ריקה</p> :
                    cart.map((item: any) => (
                        <div key={item.product.id} className="flex py-4 my-2 px-2 items-center bg-gray-50 rounded-lg">
                            <div className="flex-grow">
                                <h3 className="font-semibold">{item.product.name}</h3>
                                <p className="text-gray-600">₪{item?.product?.price!.toFixed(2)}</p>
                                <p className="font-bold text-indigo-600">{"סה\"כ:"}
                                    ₪{(item?.product?.price! * item?.quantity).toFixed(2)}</p>
                            </div>
                            <div className="flex flex-col justify-center content-center items-center ml-6">
                                <IncreaseButton item={item}/>
                                <span className="font-semibold">{item.quantity}</span>
                                <DecreaseButton item={item}/>
                            </div>
                            <img src={item.product.images![0]} alt={item.product.name}
                                 className="w-16 h-16 object-cover rounded"/>
                        </div>
                    ))}
            </div>
            {cart.length !== 0 &&
                <div className="border-gray-200">
                    <p className="text-xl font-bold mb-4">
                        {`סה"כ: ₪${totalCost().toFixed(2)}`}
                    </p>
                    <CheckoutButton triggerDrawer={triggerDrawer}/>
                </div>
            }
        </div>
    );
}