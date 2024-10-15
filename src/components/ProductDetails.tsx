import {ProductProps} from "@/interfaces/Product";
import ProductImage from "@/components/ProductImage";
import ExitXButton from "@/components/Cart/ExitXButton";
import {handleProductAddition} from "@/actions/CartActions";
import AddProductButton from "@/components/AddProductButton";

export const ProductDetails = async ({product, style}: Readonly<{ product: ProductProps, style?: string }>) => {


    return (
        <div className={`bg-white rounded-lg p-8 w-full max-w-5xl ${style}`}>
            <div className={`flex ${!style && 'justify-between'} items-start mb-4`}>
                <h2 className={`text-3xl font-bold ${style ? 'text-center w-full' : ''} `}>{product.name}</h2>
                {!style && <ExitXButton/>}
            </div>
            <div
                className={`object-fill relative h-[40rem] flex justify-center items-center bg-gray-200`}>
                <ProductImage product={product}/>
            </div>
            <p className="text-2xl pt-4 font-bold text-indigo-600 mb-4">₪{product!.price!.toFixed(2)}</p>
            <p className=" text-gray-600 mb-6">{product.description}</p>
            <AddProductButton product={product}/>
        </div>
    );
};