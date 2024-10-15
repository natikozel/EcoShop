"use client";

import {ProductProps} from "@/interfaces/Product";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useState} from 'react';
import {motion} from 'framer-motion';
import {handleProductAddition} from "@/actions/CartActions";

export default function AddProductButton({product}: { product: ProductProps }) {

    const [isLoading, setIsLoading] = useState(false);
    const {status} = useSession();
    const router = useRouter();

    const handlePurchase = async () => {
        if (status !== "authenticated") {
            router.replace('/login');
            return;
        }
        setIsLoading(true);
        await handleProductAddition(product);
        setIsLoading(false);
    };
    return (
        <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            onClick={handlePurchase}
            disabled={isLoading}
            className={`w-full py-3 px-6 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
                isLoading
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-400'
            }`}>
            {isLoading ? (
                <motion.div
                    className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    initial={{rotate: 0}}
                    animate={{rotate: 360}}
                    transition={{duration: 1, repeat: Infinity, ease: 'linear'}}
                />
            ) : (
                status === "authenticated" ? `${isLoading ? 'מוסיף...' : 'הוסף לעגלה'}` :
                    `התחבר כדי להוסיף לעגלה`
            )}
        </motion.button>
    );
}