"use client";


import {useSelector} from "react-redux";
import {useForm, FieldError} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useEffect, useState} from "react";
import {checkOut} from "@/actions/Checkout";
import * as z from "zod";
import {useFormState, useFormStatus} from "react-dom";
import Errors from "@/components/Auth/Errors";

const FormSchema = z.object({
    name: z.string().min(1, {message: "שם מלא נדרש"}),
    city: z.string().min(1, {message: "עיר נדרשת"}),
    address: z.string().min(1, {message: "כתובת נדרשת"}),
    zip: z.string().min(1, {message: "מיקוד נדרש"}),
    phone: z.string().min(10, {message: "פלאפון חייב להכיל לפחות 10 ספרות"}),
    payment: z.enum(["credit-card", "bit"] as any, {message: "שיטת תשלום נדרשת"})
});

export type CheckOutFormData = z.infer<typeof FormSchema>;


export default function Checkout() {


    const {items: cart, id: cartId} = useSelector((state: any) => state.cart);
    const {pending} = useFormStatus();
    const totalPrice = cart.reduce((total: any, item: any) => total + item.product.price * item.quantity, 0).toFixed(2)
    // const initialState: any = {};
    // const checkOutWithOrderInfo = checkOut.bind(null, cartId, totalPrice)
    // const [state, formAction] = useFormState(checkOutWithOrderInfo, initialState);
    const [allCities, setAllCities] = useState([]);
    const [errors, setErrors] = useState<FieldError | undefined | any>(undefined);

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            city: '',
            address: '',
            zip: '',
            phone: '',
            payment: 'credit-card'
        }
    });

    const onInvalidSubmit = async (data: FieldError | any) => {
        setErrors(data);
    };
    const onSubmit = async (data: CheckOutFormData) => {
        await checkOut(cartId, totalPrice, data);
    };
    useEffect(() => {
        fetch("https://data.gov.il/api/3/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab", {
            cache: "force-cache",
        }).then(r => r.json()).then((data) => {
            setAllCities(data.result.records.map((city: any) => city.שם_ישוב));
        });
    }, []);


    return (
        <div className={"flex my-14 inset-0 bg-gray-100 z-50 overflow-y-auto"}>
            <div className="container mx-auto py-8">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl text-center w-full font-bold">רכישה</h2>
                    </div>
                    <div className="flex justify-center content-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">מידע אישי</h3>
                            <form onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)} className="space-y-4">
                                <div>
                                    {errors?.name && <p className="text-red-500">{errors.name.message}</p>}
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">שם
                                        מלא</label>
                                    <input type="text" id="name" {...form.register("name")}
                                           className="focus:border-gray-500 focus:outline-none border mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
                                </div>
                                <div>
                                    {errors?.city && <p className="text-red-500">{errors.city.message}</p>}
                                    <label htmlFor="city"
                                           className="block text-sm font-medium text-gray-700">עיר</label>
                                    <select id="city" {...form.register("city")}
                                            className="focus:border-gray-500 focus:outline-none border mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                        {allCities && allCities.map((city: any) => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    {errors?.address && <p className="text-red-500">{errors.address.message}</p>}
                                    <label htmlFor="address"
                                           className="block text-sm font-medium text-gray-700">כתובת</label>
                                    <input type="text" id="address" {...form.register("address")}
                                           className="focus:border-gray-500 focus:outline-none border mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
                                </div>
                                <div>
                                    {errors?.zip && <p className="text-red-500">{errors.zip.message}</p>}
                                    <label htmlFor="zip"
                                           className="block text-sm font-medium text-gray-700">מיקוד</label>
                                    <input type="text" id="zip" {...form.register("zip")}
                                           className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-gray-500 focus:outline-none border mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
                                </div>
                                <div>
                                    {errors?.phone && <p className="text-red-500">{errors.phone.message}</p>}
                                    <label htmlFor="phone"
                                           className="block text-sm font-medium text-gray-700">פלאפון</label>
                                    <input type="tel" id="phone" {...form.register("phone")}
                                           className="focus:border-gray-500 focus:outline-none border mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
                                </div>
                                <div className="border-b py-2">
                                    <h3 className="text-xl font-semibold mb-4">סיכום הזמנה</h3>
                                </div>
                                <div className="space-y-4">
                                    {cart.map((item: any) => (
                                        <div key={item.product.id} className="flex justify-between items-center">
                                            <div>
                                                <p className="font-semibold w-60">{item.product.name}</p>
                                                <p className="text-sm text-gray-500">
                                                    {`כמות: ${item.quantity}`}
                                                </p>
                                            </div>
                                            <p className="font-semibold">₪{item.product.price.toFixed(2)}</p>
                                        </div>
                                    ))}
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between items-center font-bold">
                                            <p>{"בסה\"כ"}</p>
                                            <p>₪{totalPrice}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    {errors?.payment && <p className="text-red-500">{errors.payment.message}</p>}
                                    <h4 className="text-lg font-semibold mb-2">שיטת תשלום</h4>
                                    <div className="space-y-2 space-x-4">
                                        <label className="flex items-center">
                                            <input type="radio" {...form.register("payment")} value="credit-card"
                                                   className="ml-2"/>
                                            כרטיס אשראי
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" {...form.register("payment")} value="bit"
                                                   className="ml-2"/>
                                            אפליקציית ביט
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type={"submit"}
                                    disabled={pending}
                                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors mt-6">
                                    {`${pending ? 'המתן...' : 'המשך לתשלום'}`}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};