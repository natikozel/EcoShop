'use client';

import Link from 'next/link';
import {motion} from 'framer-motion';
import {ProductCategoryProps} from "@/interfaces/ProductCategory";
import Image from "next/image";
import LazyLoad from "@/components/LazyLoad";

export default function CategoryCard({category, index}: { category: ProductCategoryProps, index: number }) {
    return (
        <LazyLoad>
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.2, delay: index * 0.1}}
            >
                <Link href={`/category/${category.category}`} className="group" passHref>
                    <motion.div
                        whileHover={{scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)"}}
                        whileTap={{scale: 0.95}}
                        className="block bg-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="relative h-full">
                            <Image priority width={300} height={300} src={category.image} alt={category.name}
                                   className="w-full h-full object-cover"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-indigo-100 via-transparent to-transparent opacity-70"></div>
                            <h3 className="absolute bottom-4 left-4 right-4 text-lg md:text-2xl font-bold text-black text-center">
                                {category.name}
                            </h3>
                        </div>
                    </motion.div>
                </Link>
            </motion.div>
        </LazyLoad>
    );
}