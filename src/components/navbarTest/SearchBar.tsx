'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
        // Implement predictive search logic here
    }

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <Search className="absolute left-2 top-2 text-gray-400" size={20} />
        </div>
    )
}