import {getUserOrders} from "@/lib/dbUtil";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import SingleOrder from "@/components/Profile/SingleOrder";

export default async function Orders() {

    const orders = await getUserOrders();

    return (
        <Card className="bg-white">
            <CardHeader>
                <CardTitle>היסטוריית הזמנות</CardTitle>
                <CardDescription>צפה בהזמנות האחרונות שלך</CardDescription>
            </CardHeader>
            <CardContent>
                {orders.length > 0 ? (
                    <div className="space-y-4">{orders.map((order, index) => <SingleOrder order={order}
                                                                                          index={index + 1}
                                                                                          key={order.id}/>)}
                    </div>
                ) : (
                    <p className={"text-right"}>{"עדיין לא ביצעת הזמנות"}</p>
                )}
            </CardContent>
        </Card>
    )
}