import CategoryList from "@/components/Navbar/CategoryList";
import Title from "@/components/Navbar/Title";
import IconList from "@/components/Navbar/IconList";
import SideBarSheet from "@/components/navbarTest/SidebarSheet";


export default function NavBarV2() {

    return (
        <nav className="bg-white shadow-sm fixed top-0 right-0 left-0 z-50 rtl">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-reverse">
                        <div className="flex items-center md:hidden">
                            <SideBarSheet/>
                        </div>
                        <IconList/>
                    </div>
                    <CategoryList/>
                    <Title/>
                </div>
            </div>
        </nav>
    );
}
