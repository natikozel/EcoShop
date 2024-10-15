// "use client";
// import {useState} from "react";
// import {Search} from "lucide-react";
//
// export default function SearchBar() {
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('watches');
//     const [searchResults, setSearchResults] = useState([{name: 'hello'}]);
//
//     const fetchSearchResults = async (query: string) => {
//         // Replace with your actual search logic
//         const results = await fetch(`/api/search?q=${query}`).then(res => res.json());
//         setSearchResults(results);
//     };
//
//     const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchQuery(e.target.value);
//         // fetchSearchResults(e.target.value);
//     };
//
//     return (
//         <div className={"relative h-9"}>
//             <div className={`flex absolute rounded-full ${isSearchOpen ? 'border border-black' : ''}`}>
//                 <input
//                     type="text"
//                     placeholder="חיפוש..."
//                     value={searchQuery}
//                     onChange={handleSearch}
//                     className={`pl-8 w-48 pr-4 py-2 rounded-full ${isSearchOpen ? "" : 'hidden'} focus:outline-none focus:border-none border-none `}
//                 />
//                 <button className="text-gray-600 hover:text-gray-900 p-2" aria-label="חיפוש"
//                         onClick={() => setIsSearchOpen(prevState => !prevState)}>
//                     <Search className="w-6 h-6"/>
//                 </button>
//             </div>
//             {isSearchOpen && searchResults.length > 0 && (
//                 <div className="absolute top-full mt-2 w-full bg-white border-gray-300 rounded-lg shadow-lg">
//                     <ul className={"marker:hidden bg-white w-48 rounded-full"}>
//                         {searchResults.map((result, index) => (
//                             <li key={index} className="p-2 hover:bg-gray-100">
//                                 {result.name}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }
'use client';

import {useState, useRef, useEffect} from 'react';
import {Search as SearchIcon, SeparatorHorizontal, X as CloseIcon} from 'lucide-react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {searchProducts} from '@/lib/searchAction';
import {useDebounce} from '@/hooks/useDebounce';
import {ProductProps} from "@/interfaces/Product";
import Link from 'next/link';
import Image from 'next/image';
import {Separator} from "@/components/ui/separator";

export default function SearchComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<ProductProps[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const componentRef = useRef<HTMLDivElement>(null);

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    useEffect(() => {
        if (debouncedSearchTerm) {
            searchProducts(debouncedSearchTerm).then(setResults);
        } else {
            setResults([]);
        }
    }, [debouncedSearchTerm]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSearch = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 0);
        }
    };

    return (
        <div ref={componentRef} className="relative inline-block">
            <div className={`flex items-center ${isOpen ? 'bg-white rounded-lg shadow-md' : ''}`}>
                <div className={`flex items-center`}>
                    <Input
                        ref={inputRef}
                        type="text"
                        placeholder="חפש מוצרים..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`w-64 ${isOpen ? "" : 'hidden'}`}
                    />
                    <Button className={` ${isOpen ? 'hidden' : 'p-2 hover:bg-gray-100 rounded-full transition-colors'}`} variant="ghost" size="icon" onClick={toggleSearch}>
                        <SearchIcon className="h-5 w-5"/>
                        <span className="sr-only">{isOpen ? 'Close search' : 'Open search'}</span>
                    </Button>
                    <Button className={` ${isOpen ? "" : 'hidden'}`} variant="ghost" size="icon"
                            onClick={() => setIsOpen(prevState => !prevState)}>
                        <CloseIcon className="h-5 w-5"/>
                        <span className="sr-only">נקא חיפוש</span>
                    </Button>
                </div>

            </div>
            {isOpen && results.length > 0 && (
                <div className="absolute z-20 w-full mt-2 bg-white rounded-md shadow-lg max-h-96 overflow-y-auto">
                    <ul className="">
                        {results.map((product) => (
                            <li key={product.id}>
                                <Link href={`/product/${product.id}`}
                                      className="flex h-48 justify-between items-center hover:bg-gray-100 p-2  rounded-full transition-colors">
                                    <span className="text-2xl font-medium">{product.name}</span>
                                    <Image
                                        src={product.images![0] as string}
                                        alt={product.name as string}
                                        width={100}
                                        height={100}
                                        className="rounded-full mr-3 h-[100px]"
                                    />
                                </Link>
                                <Separator/>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}