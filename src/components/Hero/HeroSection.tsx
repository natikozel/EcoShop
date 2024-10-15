import {SectionRef} from "@/components/SectionRef";
import HeroVideo from "@/components/Hero/HeroVideo";
import VideoElevated from "@/components/Hero/VideoElevated";

export default function HeroSection() {

    return (
        <SectionRef id="home" className={"relative h-screen flex items-center justify-center overflow-hidden"}>
            <HeroVideo/>
            <VideoElevated/>
        </SectionRef>
    );
}