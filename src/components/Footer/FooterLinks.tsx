import Link from "next/link";
import {navbarCategories} from "@/lib/utils";
import {NavbarCategoryProps} from "@/interfaces/NavbarCategory";
import SectionSlider from "@/components/SectionSlider";

export default function FooterLinks() {
    return (
        <div>
            <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2 flex flex-col">
                {navbarCategories.map((item: NavbarCategoryProps) =>
                    <SectionSlider style="hover:text-indigo-400 transition-colors text-right"
                                   item={item} key={item.eng}/>)}
                {/*{navbarCategories.map((item) => (*/}
                {/*        <li key={item.eng}>*/}
                {/*            <Link href={`#${item.eng.toLowerCase()}`}*/}
                {/*                  className="hover:text-indigo-400 transition-colors">*/}
                {/*                {item.heb}*/}
                {/*            </Link>*/}
                {/*        </li>*/}
                {/*    ))}*/}
            </ul>
        </div>
    );
}