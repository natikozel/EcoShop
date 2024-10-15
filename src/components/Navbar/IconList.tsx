import SearchBar from "@/components/Navbar/SearchBar";
import AuthIcon from "@/components/Navbar/AuthIcon";
import AdminIcon from "@/components/Navbar/AdminAccessibilityIcon";
import FavoriteIcon from "@/components/Navbar/FavoriteIcon";
import CartFetcher from "@/components/Cart/CartFetcher";

export default function IconList() {

    return (
        <div className="flex items-center max-w-lg">
            <AuthIcon/>
            <FavoriteIcon/>
            <CartFetcher/>
            <SearchBar/>
            <AdminIcon/>
        </div>
    );
}