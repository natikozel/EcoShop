import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Orders from "@/components/Profile/Orders";
import ContactTab from "@/components/Profile/ContactTab";

export default async function TabsContainer() {
    return (
        <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger className="border hover:bg-gray-50" value="orders">הזמנות</TabsTrigger>
                <TabsTrigger className="border hover:bg-gray-50" value="contact">יצירת קשר</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
                <Orders/>
            </TabsContent>
            <TabsContent value="contact">
                <ContactTab/>
            </TabsContent>
        </Tabs>
    )
}