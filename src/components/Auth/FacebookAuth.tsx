import {FaFacebook} from "react-icons/fa";
import {signIn} from "next-auth/react";

export default function FacebookAuth() {
    return (
        <button
            onClick={() => signIn('facebook')}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
            <FaFacebook className="h-5 w-5 text-blue-600"/>
        </button>    )
}