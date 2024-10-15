"use server"


import {getUserId} from "@/lib/AuthGuard";
import {createOrder} from "@/lib/dbUtil";
import {CheckOutFormData} from "@/app/checkout/page";

export const checkOut = async (cartId: any, totalPrice: any, formData: CheckOutFormData) => {

    const {name, city, address, zip, phone} = formData;
    console.log(formData)

    const order = {
        userId: await getUserId(),
        cartId,
        totalPrice,
        status: "בעיבוד",
        orderDate: new Date(),
        deliveryDate: new Date(new Date().setDate(new Date().getDate() + 3)),
        customerName: name,
        city, address, zip, phone

    }
    try {
        await createOrder(order)
    } catch (e) {
        console.error(e)
    }
}