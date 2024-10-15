import {Button} from "@/components/ui/button";
import Link from "next/link";
import WhatsappLink from "@/components/Contact/WhatsappLink";
import MessengerLink from "@/components/Contact/MessengerLink";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function ContactTab() {
    return (
        <Card className="bg-white">
            <CardHeader>
                <CardTitle>צור קשר</CardTitle>
                <CardDescription>צרו קשר לפרטים או שאלות</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" className="w-full">
                        <WhatsappLink/>
                    </Button>
                    <Button variant="ghost" className="w-full">
                        <MessengerLink/>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}