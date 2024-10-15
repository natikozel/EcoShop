import {FaWhatsapp} from "react-icons/fa";

export default function WhatsappLink({href}: { href?: string }) {
    return (
        <a target="_blank" href={`${href ?? 'https://wa.me/972523364368'}`}
              className="flex items-center text-green-500 hover:text-green-600 transition-colors">
            <FaWhatsapp className="w-8 h-8 ml-3"/>
            <span className="text-lg">WhatsApp</span>
        </a>
    );
}