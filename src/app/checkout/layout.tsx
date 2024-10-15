import type {Metadata} from "next";
import {AuthGuard} from "@/lib/AuthGuard";
import {redirect} from "next/navigation";


export const metadata: Metadata = {
    title: "Checkout",
    description: "EcoShop's checkout page",
};

export default async function checkoutLayout({children}: Readonly<{ children: React.ReactNode }>) {
    if (!await AuthGuard())
        return redirect('/')

    return (
        <>
            {children}
        </>
    );
};