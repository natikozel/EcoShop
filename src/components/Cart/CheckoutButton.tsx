import Link from "next/link";
import {useRouter} from "next/navigation";

export default function CheckoutButton({triggerDrawer}: { triggerDrawer?: () => void }) {

    const router = useRouter();
    const handleCheckout = () => {
        if (triggerDrawer) {
            triggerDrawer();
        }
        router.replace('/checkout');
    };

    return (
        <button
            onClick={handleCheckout}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
            עבור לרכישה
        </button>

    );
}