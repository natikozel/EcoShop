'use client';

import {motion} from 'framer-motion';
import {FaWhatsapp, FaFacebookMessenger} from 'react-icons/fa';

const contactMethods = [
    {icon: FaWhatsapp, name: 'WhatsApp', color: 'green', link: 'https://wa.me/972524144321'},
    {icon: FaFacebookMessenger, name: 'Messenger', color: 'blue', link: 'https://m.me/100008587188632'},
];

export default function ContactMethods() {
    return (
        <div
            className="flex flex-col w-full md:flex-row justify-center md:gap-10 items-center space-y-6 md:space-y-0 md:space-x-12">
            {contactMethods.map((method, index) => (
                <motion.a
                    target={"_blank"}
                    key={method.name}
                    href={method.link}
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.6,
                        delay: 0.4 + index * 0.2,
                        type: "spring",
                        stiffness: 100
                    }}
                    whileHover={{scale: 1.05, y: -5}}
                    whileTap={{scale: 0.95}}
                    className={`flex items-center justify-center w-64 h-20 bg-white text-${method.color}-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-75`}
                >
                    <method.icon className="w-8 h-8 mr-3"/>
                    <span className="text-xl font-semibold">{method.name}</span>
                </motion.a>
            ))}
        </div>
    );
}