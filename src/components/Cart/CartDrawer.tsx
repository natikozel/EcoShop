"use client";
import {useEffect, useState} from 'react';
import {ShoppingCart} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/interfaces/store/store";
import CartItems from "@/components/Cart/CartItems";
import {replaceCart} from "@/store/slices/CartSlice";

export default function CartDrawer({cart}: { cart: any }) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const itemsLength = cartItems.length;
    const [bounce, setBounce] = useState(false);
    const triggerDrawer = () => setIsDrawerOpen(prevState => !prevState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cart?.cartProducts) {
            dispatch(replaceCart(cart));
        }
    }, [cart, dispatch]);

    useEffect(() => {
        if (itemsLength > 0) {
            setBounce(true);
            const timer = setTimeout(() => setBounce(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [itemsLength]);

    return (

        <div className="flex items-center">
            <Sheet open={isDrawerOpen} onOpenChange={triggerDrawer}>
                <SheetTrigger asChild>
                    <Button variant={"ghost"} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <div className={"relative"}>
                            <ShoppingCart className="w-6 h-6 text-gray-600 "/>
                            {itemsLength > 0 && (
                                <span
                                    className={`${bounce ? 'animate-bounce' : ''} absolute -top-4 left-3 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center`}>{itemsLength}
                                    </span>
                            )}
                        </div>
                    </Button>
                </SheetTrigger>
                <SheetContent className={"max-h-dvh"}>
                    <SheetHeader className="flex justify-between items-center pb-16">
                        <SheetTitle>עגלה</SheetTitle>
                    </SheetHeader>
                    <CartItems triggerDrawer={triggerDrawer}/>
                </SheetContent>
            </Sheet>
        </div>

    );
}

