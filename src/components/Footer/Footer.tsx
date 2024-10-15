import NewsLetter from "@/components/Footer/NewsLetter";
import FooterLinks from "@/components/Footer/FooterLinks";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-gray-800 to-gray-900 text-white py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">אופנה יד שנייה בסטייל</h3>
                        <p className="mb-4">תכשיטים ובגדי יד 2 באיכות גבוהה</p>
                    </div>
                    <FooterLinks/>
                    <NewsLetter/>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p>&copy; 2024 אופנה יד שנייה בסטייל. כל הזכויות שמורות.</p>
                </div>
            </div>
        </footer>
    );
}