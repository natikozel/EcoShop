"use client"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {useState} from "react";

export default function SingleOrder({order, index}: { order: any, index: number }) {

    const [expandedOrder, setExpandedOrder] = useState(false);

    const toggleOrderDetails = () => {
        setExpandedOrder(prevState => !prevState);
    };

    return (
        <Card key={order.id} className="bg-gray-50">
            <CardHeader className="cursor-pointer" onClick={toggleOrderDetails}>
                <div className="flex justify-between items-center">
                    {expandedOrder ? <ChevronLeft className="h-5 w-5"/> :
                        <ChevronRight className="h-5 w-5"/>}
                    <CardTitle
                        className={"text-right"}>{`הזמנה מס' ${index}`}</CardTitle>
                </div>
                <CardDescription>{order.orderDate.toLocaleDateString('he')}</CardDescription>
            </CardHeader>
            <CardContent>
                <div
                    className="flex-col space-y-4 flex-wrap whitespace-nowrap justify-start text-right">
                    <span>{`סה"כ: ₪`}{parseFloat(order.totalPrice).toFixed(2)}</span>
                    <div className="font-semibold">{order.status}</div>
                </div>
                {expandedOrder && (
                    <div className="mt-4 space-y-2">
                        <Separator/>
                        <h4 className="font-semibold text-right">:פרטי ההזמנה</h4>
                        {order.cart.cartProducts.map((item: any, index: number) => (
                            <div key={item.id}
                                 className="flex flex-row content-between justify-between">
                                <span
                                    className={"text-left"}>₪{parseFloat(item.product.price).toFixed(2)}
                                </span>
                                <span>
                                    {item.quantity} x {item.product.name}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}