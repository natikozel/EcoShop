"use client";

import {VenetianMask} from "lucide-react";
import Link from "next/link";
import {useSession} from "next-auth/react";

export default function AdminIcon() {

    const {data: session} = useSession();
    if (!session || !session.user?.role as unknown as string === 'ADMIN')
        return null;

    return (
        <Link href={"/admin/new-product"}>
            <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <VenetianMask className="w-6 h-6 text-gray-600"/>
            </button>
        </Link>
    );
}