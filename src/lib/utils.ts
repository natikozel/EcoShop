import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import {NavbarCategoryProps} from "@/interfaces/NavbarCategory";
import {ProductCategoryProps} from "@/interfaces/ProductCategory";
import girlClothes from "../../public/בגדי_ילדות.jpg";
import boyClothes from "../../public/בגדי_ילדים.jpg";
import menClothes from "../../public/בגדי_גברים.jpg";
// import womenClothes from "../../public/בגדי_נשים.jpg";
import watches from "../../public/watches.webp";
import accessories from "../../public/accessories.webp";
import clothes from "../../public/clothes.webp";

export const navbarCategories: NavbarCategoryProps[] = [
    {eng: 'Home', heb: 'בית'},
    {eng: 'Categories', heb: 'קטגוריות'},
    {eng: 'Trending', heb: 'מוצרים חדשים'},
    {eng: 'Contact', heb: 'צור קשר'}
];

export const productCategories: ProductCategoryProps[] = [
    {id: 1, category: "clothes", name: "Clothing", image: clothes.src},
    // {id: 1, category: "women", name: "Women's Clothing", image: womenClothes.src},
    {id: 2, category: "watches", name: "Watches", image: watches.src},
    {id: 3, category: "accessories", name: "Accessories", image: accessories.src},
    // {id: 2, category: "men", name: "Men's Clothing", image: menClothes.src},
    // {id: 3, category: "girl", name: "Girl Clothing", image: boyClothes.src},
    // {id: 4, category: "boy", name: "Boy Clothing", image: girlClothes.src},
    // {id: 7, category: "necklaces", name: "Necklaces", image: defaultImage.src},

];


export const getCategory = (category: string): NavbarCategoryProps | undefined => navbarCategories.find((item) => item.eng === category);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
