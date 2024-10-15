import {getProductById} from "@/lib/dbUtil";
import Modal from "@/components/Modal";
import {ProductDetails} from "@/components/ProductDetails";

export default async function ProductId({params}: any) {
    const {id} = params;
    const plainProduct = await getProductById(id);

    return (

        <div className={"flex justify-center"}>
            <ProductDetails style={'h-lvh flex-col justify-center content-center my-24'} product={plainProduct!}/>
        </div>

    );
}