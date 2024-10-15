"use client"
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useSession} from "next-auth/react";

export default function ProfileHeader() {


    const {data: session} = useSession();

    return (
        <>
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">הפרופיל שלי</h1>
                <Button variant="ghost" className="flex items-center space-x-2">
                    <span className={"ml-2"}>התנתק</span>
                    <LogOut className="h-5 w-5 mr-2"/>
                </Button>
            </header>
            <Card className="bg-white">
                <CardHeader>
                    <CardTitle>מידע אישי</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><strong>שם:</strong> {session?.user.name}</p>
                    <p><strong>אימייל:</strong> {session?.user.email}</p>
                </CardContent>
            </Card>
        </>
    )
}