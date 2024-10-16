import {FaFacebookMessenger} from "react-icons/fa";

export default function MessengerLink({href}: { href?: string }) {
    return (
        <a target="_blank" href={`${href ?? 'https://m.me/100008587188632'}`}
           className="flex items-center text-blue-500 hover:text-blue-600 transition-colors">
            <FaFacebookMessenger className="w-8 h-8 ml-2"/>
            <span className="text-lg">Messenger</span>
        </a>
    );
}