import {SectionRef} from "@/components/SectionRef";
import LazyLoad from "@/components/LazyLoad";
import {getAllProductsByCategory, getUserLikedProducts} from "@/lib/dbUtil";
import TrendingProductCarousel from "@/components/Trending/ProductCarousel";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/options";


export default async function TrendingSection() {

    const products = await getAllProductsByCategory();
    const session = await getServerSession(authOptions);

    const likedProducts = await getUserLikedProducts(session?.user.userId);
    const plainProducts = JSON.parse(JSON.stringify(products));

    return (
        <SectionRef id={"trending"} className={"bg-gradient-to-br from-indigo-100 to-purple-100"}>
            <div className="container mx-auto px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-800">מוצרים חדשים</h2>
                <LazyLoad>
                    <TrendingProductCarousel likedProducts={likedProducts} products={plainProducts}/>
                </LazyLoad>
            </div>
        </SectionRef>
    );
}