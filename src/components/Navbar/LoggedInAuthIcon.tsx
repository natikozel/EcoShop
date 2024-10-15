'use client';

import {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {User, LogOut} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import LogoutDialog from "@/components/Navbar/LogoutDialog";
import {useSession} from "next-auth/react";

export default function LoggedOutAuthIcon() {
    const router = useRouter();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const {data: session} = useSession();
    const handleProfileClick = () => {
        setIsDrawerOpen(false);
        router.push('/profile');
    };
    return (

        <div className="flex items-center">
            <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                {/*{session?.user.name}*/}
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <User className="w-6 h-6 text-gray-600"/>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>תפריט</SheetTitle>
                    </SheetHeader>
                    <SheetDescription className="mr-4 my-1 font-semibold pb-6">
                        {`שלום, ${session?.user.name}`}
                    </SheetDescription>
                    <div className="mt-4 space-y-4">
                        <Button variant="ghost" onClick={handleProfileClick} className="w-full justify-start">
                            איזור אישי
                            <User className="w-6 h-6 mr-2"/>
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => setIsOpen(true)}
                            className="w-full justify-start"
                        >
                            התנתק
                            <LogOut className="h-5 w-5 mr-2"/>
                        </Button>
                        <LogoutDialog isOpen={isOpen} setIsOpen={setIsOpen}/>
                    </div>
                </SheetContent>
            </Sheet>
        </div>

    );
}

