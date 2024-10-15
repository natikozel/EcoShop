import {productCategories} from "@/lib/utils";
import LazyLoad from "@/components/LazyLoad";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "../../../public/defaultshirt.jpg";
import CategoryCard from "@/components/Categories/CategoryCard";

export default function ProductCategoryList() {
    return (
        // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
        <div className="flex flex-wrap gap-12 flex-row justify-center content-center">
            {productCategories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index}/>
            ))}
        </div>
    );
}


