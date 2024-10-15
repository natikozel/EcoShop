"use client";
import LazyLoad from "@/components/LazyLoad";
import {motion} from "framer-motion";


export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-100 to-gray-200">
            <div className="container mx-auto px-4">
                <LazyLoad>
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3}}
                        className="text-3xl md:text-4xl font-bold mb-8 text-right text-gray-800"
                    >                    {`קצת עלינו`}
                    </motion.h2>
                    <div className="max-w-3xl text-right w-full pb-6">
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3, delay: 0.2}}
                            className="text-lg whitespace-pre-wrap text-gray-600 text-right mb-6">
                            {`
ברוכים הבאים ל"אופנה יד שנייה בסטייל", כאן אנחנו מאמינים בלתת לאופנה סיכוי נוסף!
בתור אמא לשלושה עם אהבה לסטייל, החלטתי להקים את החנות הזו כדי להציע בגדים איכותיים יד שנייה במחירים נוחים וכדי לתת הזדמנות עבור אחרים להנות מהם.
מה שהתחיל כפרויקט קטן בפייסבוק צמח והפך לחנות אונליין של ממש, שמציעה מבחר בגדים שנבחרו בקפידה.
לכל פריט יש סיפור, ואני גאה לתת את השירות הטוב ביותר עבור כל לקוח בעצמי כדי לוודא שפריט יגיע במצב מצוין ומוכן לבית חדש.
                            `}
                        </motion.p>
                    </div>
                </LazyLoad>

                <LazyLoad>
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3}}
                        className="text-3xl md:text-4xl font-bold mb-8 text-right text-gray-800">
                        המשימה שלנו
                    </motion.h2>
                    <div className="max-w-3xl text-right pb-14">
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3, delay: 0.4}}
                            className="text-lg mb-6 text-gray-600 text-right">
                            {`להציע בגדי יד שנייה איכותיים במחירים נוחים תוך קידום קיימות וצמצום פסולת טקסטיל.`}
                        </motion.p>
                    </div>
                </LazyLoad>


                <LazyLoad>
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3}}
                        className="text-3xl md:text-4xl font-bold mb-8 text-right text-gray-800">
                        למה לקנות אצלנו?
                    </motion.h2>

                    <ul className="text-lg mb-6 text-right whitespace-pre-wrap">
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3, delay: 0.6}}
                            className="text-lg text-gray-600 text-right"
                        >
                            <strong>מבחר קפדני</strong>: כל פריט נבדק באופן אישי לאיכות.
                        </motion.p>
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3, delay: 0.8}}
                            className="text-lg text-gray-600 text-right"
                        ><strong>מחירים נוחים</strong>: אופנה לא חייבת להיות יקרה.
                        </motion.p>
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3, delay: 1}}
                            className="text-lg text-gray-600 text-right"
                        ><strong>עסק משפחתי</strong>: חנות קטנה שנבנתה באהבה ובתשומת לב.
                        </motion.p>
                    </ul>
                </LazyLoad>
            </div>
        </section>
    );
}