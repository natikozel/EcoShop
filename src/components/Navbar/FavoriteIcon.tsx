import {Heart} from "lucide-react";

export default function FavoriteIcon() {
    return (
        <button className="text-gray-600 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="מועדפים">
            <Heart className="w-6 h-6"/>
        </button>
    )
}