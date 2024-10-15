import {getAllProductsByCategory} from "@/lib/dbUtil";
import ProductsList from "@/components/ProductsList";

const categoryLabel = (category: string) => {
    switch (category) {
        case "women":
            return `בגדי נשים יד 2`;
        case "men":
            return `בגדי גברים יד 2`;
        case "baby":
            return `בגדי ילדים יד 2`;
        case "children":
            return `בגדי תינוקות יד 2`;
        case "watches":
            return `שעונים`;
        default:
            return `לא ידוע`;
    }
};


export default async function CategoryPage({params}: any) {
    const {category} = params;
    const products: any = await getAllProductsByCategory(category);
    const plainProducts = JSON.parse(JSON.stringify(products));

    return (
        <div className="min-h-screen bg-gray-100 my-14">
            <main className="container mx-auto px-4 py-8">
                <h1 className="mt-14 text-3xl font-bold mb-8">{categoryLabel(category)}</h1>
                <ProductsList products={plainProducts}/>
            </main>
        </div>
    );
}