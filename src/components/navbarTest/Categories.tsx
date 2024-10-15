import Link from 'next/link'

const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Toys']

export default function Categories() {
    return (
        <div className="hidden md:flex space-x-6">
            {categories.map((category) => (
                <Link
                    key={category}
                    href={`/category/${category.toLowerCase().replace(' & ', '-')}`}
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                    {category}
                </Link>
            ))}
        </div>
    )
}