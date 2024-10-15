import {navbarCategories} from "@/lib/utils";
import SectionSlider from "@/components/SectionSlider";
import {NavbarCategoryProps} from "@/interfaces/NavbarCategory";

export default function CategoryList() {

    return (
        <div
            className="hidden md:flex space-x-6 md:text-gray-600 md:hover:text-gray-900 p-2">
            {navbarCategories.map((item: NavbarCategoryProps) =>
                <SectionSlider
                    item={item}
                    key={item.eng}
                    style={"first:mx-6 z-10 relative border border-none p-2 group"}>
                    <span
                        className={"absolute bg-gray-100 duration-200 ease-out border border-none rounded-full transition-all inset-0 w-full h-full scale-x-0 group-hover:scale-x-100 -z-10"}></span>
                </SectionSlider>
            )}
        </div>
    );
}