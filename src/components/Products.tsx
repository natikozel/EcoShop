"use client";
import {useRef} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import ProductsList from "@/components/ProductsList";

export const Products = ({products}: any) => {


    const scrollContainerRef = useRef<any>();


    const scroll = (direction: string) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollContainerRef.current.scrollBy({left: scrollAmount, behavior: 'smooth'});
        }
    };


    return (
        <div className="relative">
            <div style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}
                 className="flex overflow-x-hidden -space-x-4 md:space-x-6 py-4 scrollbar-hide touch-pan-x"
                 ref={scrollContainerRef}>
                <ProductsList products={products}/>
            </div>
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block"
                onClick={() => scroll("left")}
            >
                <ChevronLeft className="w-6 h-6 text-gray-600"/>
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block"
                onClick={() => scroll('right')}
            >
                <ChevronRight className="w-6 h-6 text-gray-600"/>
            </button>
        </div>
    );
};