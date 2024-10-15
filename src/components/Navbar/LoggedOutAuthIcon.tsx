import Link from "next/link";
import {User} from "lucide-react";

export default function LoggedOutAuthIcon() {
    return (
        <Link href={"/login"}>
            <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="w-6 h-6 text-gray-600"/>
            </button>
        </Link>
    )
}