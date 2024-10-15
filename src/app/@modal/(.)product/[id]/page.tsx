import Modal from "@/components/Modal";
import {getProductById} from "@/lib/dbUtil";
import {notFound} from "next/navigation";
import ProductDetails from "@/components/ProductDetailsV2";

export default async function InterceptedProductDetails({params}: { params: { id: string } }) {

    const {id} = params;
    const plainProduct = await getProductById(id);

    if(!plainProduct)
        notFound();

    return (
        <Modal>
            <ProductDetails product={plainProduct}/>
        </Modal>
    );
}