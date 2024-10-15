"use client";
import {useRouter} from "next/navigation";

export default function AuthLink({href}: { href: string }) {

    const router = useRouter();

    return (
        <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={() => router.replace(href)}
        >

            {(() => {
                switch (href) {
                    case "/login":
                        return "התחבר";
                    case "/signup":
                        return "הירשם";
                    case "/forgotpassword":
                        return "שכחת סיסמא?";
                    default:
                        return "";
                }
            })()}
        </button>
    );
}