import Title from "@/components/Navbar/Title";
import CategoryList from "@/components/Navbar/CategoryList";
import IconList from "@/components/Navbar/IconList";

export default function Navbar() {


    return (
        <nav
            className={""}>
            {/*// className="bg-gradient-to-b from-white to-white border-transparent fixed top-0 left-0 right-0 z-50">*/}
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Title/>
                    <CategoryList/>
                    <IconList/>
                </div>
            </div>
        </nav>
    );
}