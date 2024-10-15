'use client';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {CheckCircle, Loader2} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {useSession} from "next-auth/react";

export default function RegistrationSuccess() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const { data : session } = useSession();

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            router.replace('/');
        }, 5000);

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 2;
            });
        }, 100);

        return () => {
            clearTimeout(redirectTimer);
            clearInterval(interval);
        };
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                        <CheckCircle className="h-12 w-12 text-green-500"/>
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">נרשמת בהצלחה!</CardTitle>
                    <CardDescription className="text-center">
                        {`ברוך הבא לאופנה יד שנייה בסטייל. תופנה לדף הבית בעוד רגע.`}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={progress} className="w-full"/>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button
                        onClick={() => router.push('/')}
                        className="flex items-center space-x-2"
                    >
                        {progress < 100 ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin"/>
                                <span>{"חוזר לדף הבית..."}</span>
                            </>
                        ) : (
                            <span>{`עבור מיד`}</span>
                        )}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}