'use client';

import {useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

interface ImageGalleryProps {
    images: string[];
    onImageClick: (image: string) => void;
}

export default function ImageGallery({images, onImageClick}: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="space-y-4 mt-4">
            <div className="relative">
                <motion.div
                    key={currentIndex}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                    className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200"
                >
                    <Image
                        src={images[currentIndex] ?? "/placeholder.svg?height=600&width=600"}
                        alt={`Product image ${currentIndex + 1}`}
                        width={600}
                        height={600}
                        className="object-cover w-full h-full cursor-pointer hover:opacity-75 transition-opacity"
                        onClick={() => onImageClick(images[currentIndex])}
                    />
                </motion.div>
                {images.length > 1 &&
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                        <button
                            onClick={prevImage}
                            className="bg-white bg-opacity-50 rounded-full p-2 text-gray-800 hover:bg-opacity-75 transition-all"
                        >
                            &#10094;
                        </button>
                        <button
                            onClick={nextImage}
                            className="bg-white bg-opacity-50 rounded-full p-2 text-gray-800 hover:bg-opacity-75 transition-all"
                        >
                            &#10095;
                        </button>
                    </div>
                }
            </div>
            <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                    <div
                        key={image}
                        className={`relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 ${
                            index === currentIndex ? 'ring-2 ring-indigo-500' : ''
                        }`}
                    >
                        <Image
                            src={images[currentIndex] ?? "/placeholder.svg?height=150&width=150"}
                            alt={`Product thumbnail ${index + 1}`}
                            width={100}
                            height={100}
                            className="object-contain cursor-pointer hover:opacity-75 transition-opacity"
                            onClick={() => setCurrentIndex(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}