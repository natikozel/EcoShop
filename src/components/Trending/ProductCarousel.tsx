'use client';

import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {ProductProps} from "@/interfaces/Product";
import {useRouter} from "next/navigation";
import LikeButton from "@/components/LikeButton";

export default function TrendingProductCarousel({products, likedProducts}: { products: ProductProps[], likedProducts: any }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();

    const nextProduct = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevProduct = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const isLiked = likedProducts?.findIndex((p: any) => p.productId === products[currentIndex]?.id) !== -1;

    if (!products) return null;

    return (
        <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="md:flex md:justify-between">
                        <div className="pl-8 pt-8 pr-8 w-full">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                נוסף לאחרונה
                            </div>
                            <h3 className="mt-1 text-2xl leading-tight font-bold text-gray-900">
                                {products[currentIndex].name}
                            </h3>
                            <p className="mt-2 text-gray-600">
                                {products[currentIndex].description}
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-indigo-600 font-bold text-xl">
                                    	₪{products[currentIndex]?.price!.toFixed(2)}
                                </span>
                                <LikeButton productId={products[currentIndex]?.id as string} isLiked={isLiked}/>
                            </div>
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="my-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors text-sm md:text-base"
                                onClick={() => router.push(`/product/${products[currentIndex]?.id}`)}
                            >
                                {/*<Link href={`/product/${products[currentIndex]?.id}`}>*/}
                                ראה פרטים
                                {/*</Link>*/}

                            </motion.button>
                        </div>
                        <div className="md:flex-shrink-0">
                            <img
                                className="h-64 w-full object-cover md:w-96"
                                src={products[currentIndex].images![0]}
                                alt={products[currentIndex].name}
                            />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <motion.button
                // whileHover={{scale: 1.1}}
                // whileTap={{scale: 0.9}}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md"
                onClick={prevProduct}
            >
                <ChevronLeft className="w-6 h-6 text-indigo-600"/>
            </motion.button>
            <motion.button
                // whileHover={{scale: 1.1}}
                // whileTap={{scale: 0.9}}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-md"
                onClick={nextProduct}
            >
                <ChevronRight className="w-6 h-6 text-indigo-600"/>
            </motion.button>
        </div>
    );
}