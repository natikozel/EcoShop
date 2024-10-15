'use client'

import {useState} from 'react'
import {Menu, X} from 'lucide-react'
import Link from 'next/link'
import {productCategories} from "@/lib/utils";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <X className="w-6 h-6 text-gray-600"/> : <Menu className="w-6 h-6 text-gray-600"/>}
            </button>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? 'block' : 'hidden'}`}>
                <div
                    className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors float-right"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6 text-gray-600"/>
                        </button>
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4">Categories</h2>
                            {productCategories.map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/category/${category.category}`}
                                    className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}