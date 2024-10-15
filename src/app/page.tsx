import HeroSection from '@/components/Hero/HeroSection';
import AboutSection from '@/components/About/AboutSection';
import CategoriesSection from '@/components/Categories/CategoriesSection';
import TrendingSection from '@/components/Trending/TrendingSection';
import ContactSection from '@/components/Contact/ContactSection';
export default async function Home() {

    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <CategoriesSection/>
            <TrendingSection/>
            <ContactSection/>
        </>
    );
}