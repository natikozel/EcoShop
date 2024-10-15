'use client';

import {useState} from 'react';
import Image from 'next/image';
import {motion, AnimatePresence} from 'framer-motion';
import {ProductProps} from "@/interfaces/Product";
import ImageGallery from "@/components/ImageGallery";
import AddProductButton from "@/components/AddProductButton";
import ExitXButton from "@/components/Cart/ExitXButton";

export default function ProductDetails({product}: { product: ProductProps }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.9}}
            className="flex items-center justify-center"
        >
            <motion.div
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: 50, opacity: 0}}
                className="relative max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden"
            >
                <ExitXButton style={"absolute p-2 top-2 right-2 transition-colors"}/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <div className="flex flex-col space-y-6 justify-between flex-wrap mt-4">
                        <div className={"flex flex-col flex-wrap space-y-6"}>
                            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                            <p className="text-2xl font-semibold text-gray-700">${product.price!.toFixed(2)}</p>
                            <p className="text-gray-600">{product.description}</p>
                        </div>
                        <AddProductButton product={product}/>
                    </div>
                    <ImageGallery images={product.images!} onImageClick={setSelectedImage}/>
                </div>
            </motion.div>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-90"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{scale: 0.9}}
                            animate={{scale: 1}}
                            exit={{scale: 0.9}}
                            className="relative max-w-2xl"
                        >
                            <Image
                                src={selectedImage}
                                alt="Enlarged product image"
                                width={500}
                                height={800}
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}