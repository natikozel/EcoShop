"use client";

import {Menu, X} from "lucide-react";
import {useState} from "react";

export default function MobileMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-gray-600"/> :
                <Menu className="w-6 h-6 text-gray-600"/>}
        </button>
    );
}