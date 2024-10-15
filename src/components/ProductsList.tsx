"use client";
import Image from "next/image";
import Link from "next/link";
import {Heart} from "lucide-react";
import {ProductProps} from "@/interfaces/Product";
import {useState} from "react";

export default function ProductsList({products}: { products: ProductProps[] }) {

    // Fix like functionality
    const [likedProducts, setLikedProducts] = useState<any>([]);
    const toggleLiked = (productId: any) => {
        setLikedProducts((prev: any) =>
            prev.includes(productId)
                ? prev.filter((id: any) => id !== productId)
                : [...prev, productId]
        );
    };

    return (
        <div className="flex content-center justify-center flex-wrap">
            {products.map((product: ProductProps) => (
                <div key={product.description} className="p-4 flex-none w-64 md:w-72"
                     style={{scrollSnapAlign: 'start'}}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image priority width={500} height={500} src={product?.images![0] as string}
                               alt={product?.name as string}
                               className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                            <p className="text-indigo-600 font-bold">₪{product?.price?.toFixed(2)}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <Link href={`/product/${product?.id}`}>
                                    <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors text-sm md:text-base">ראה פרטים</button>
                                </Link>
                                <button
                                    onClick={() => toggleLiked(product?.id)}
                                    className={`p-2 rounded-full ${likedProducts.includes(product?.id) ? 'text-red-500' : 'text-gray-400'} hover:bg-gray-100 transition-colors`}>
                                    <Heart className="w-6 h-6"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>))}
        </div>);
}