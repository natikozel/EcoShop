"use client";

import {X} from "lucide-react";
import {useRouter} from "next/navigation";

export default function ExitXButton({style}: { style?: string }) {

    const router = useRouter();
    return (
        <button onClick={router.back} className={`${style} text-gray-500 hover:text-gray-700`}>
            <X className="w-6 h-6"/>
        </button>
    );
}