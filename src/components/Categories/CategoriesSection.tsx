import {SectionRef} from "@/components/SectionRef";
import ProductCategoryList from "@/components/Categories/ProductCategoryList";


export default function CategoriesSection() {

    return (
        <SectionRef id="categories" className={"bg-gradient-to-b from-gray-100 to-indigo-100"}>
            {/*<SectionRef id="categories" exCss={"bg-gradient-to-b from-gray-100 to-white"}>*/}
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-6xl font-bold mb-12 text-center text-gray-800">סנן לפי קטגוריות</h2>
                <ProductCategoryList/>
            </div>
        </SectionRef>
    );
}