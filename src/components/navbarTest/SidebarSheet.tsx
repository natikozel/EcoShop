"use client";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {productCategories} from "@/lib/utils";
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";

export default function SideBarSheet() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    return (
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
                <Button variant={"ghost"} className="text-gray-600 hover:text-gray-900">
                    <div className={"relative"}>
                        <Menu className="w-6 h-6"/>
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent className={"max-h-dvh"}>
                <div className={"mt-10"}></div>
                {productCategories.map((category, index) => (
                    <Link
                        key={index}
                        href={`/category/${category.name}`}
                        className=" hover:bg-gray-300 hover:scale-x-105 rounded-full transition ease-linear py-2 flex items-center justify-between space-x-reverse text-gray-600 hover:text-gray-900"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <span className={"mx-2"}>{category.name}</span>
                        <Image width={40} height={40} src={category.image} alt={category.name}
                               className="mx-2 left-full w-10 h-10 rounded-full object-cover"/>
                    </Link>
                ))}
            </SheetContent>
        </Sheet>
    );
}