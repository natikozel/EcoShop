import SectionSlider from "@/components/SectionSlider";
import {getCategory} from "@/lib/utils";
import AnimatedHeroContent from "@/components/Hero/AnimatedHeroContent";

export default function VideoElevated() {


    return (
        <>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <AnimatedHeroContent/>;
        </>
    );
}