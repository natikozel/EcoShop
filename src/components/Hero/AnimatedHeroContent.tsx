'use client';

import {motion} from 'framer-motion';
import {getCategory} from "@/lib/utils";
import SectionSlider from "@/components/SectionSlider";

export default function AnimatedHeroContent() {


    const categoryToSlideInto = getCategory("Trending");
    categoryToSlideInto!.heb = "מוצרים חדשים";


    return (
        <div className="relative z-10 text-center text-white px-4">
            <motion.h1
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.2}}
                className="text-transparent text-6xl mb-4 font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-white"
            >
                אופנה יד שנייה בסטייל
            </motion.h1>


            <motion.p
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.4}}
                className=" text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            >
                בגדים איכותיים במחירים נוחים לכל ארון
            </motion.p>

            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.8, delay: 0.6}}
            >
                <motion.a
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-indigo-100"
                >
                    <SectionSlider item={categoryToSlideInto}/>
                </motion.a>
            </motion.div>

        </div>
    );

}