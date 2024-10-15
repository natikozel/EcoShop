import {ProductProps} from "@/interfaces/Product";
import Image from "next/image";

export default function ProductImage({product}: { product: ProductProps }) {
    return (
        <Image fill src={product?.images![0] as string} alt={product!.name!}
               className={`object-contain`}/>

    );

}