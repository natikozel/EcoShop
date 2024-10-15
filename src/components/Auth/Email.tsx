import {Mail} from "lucide-react";

export default function Email() {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">אימייל</label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400"/>
                </div>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                />
            </div>
        </div>
    )
}