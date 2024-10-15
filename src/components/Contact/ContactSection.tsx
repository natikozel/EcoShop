"use client";
import {SectionRef} from "@/components/SectionRef";
import LazyLoad from "@/components/LazyLoad";
import ContactMethods from "@/components/Contact/ContactMethods";

export default function ContactSection() {


    return (
        <SectionRef id="contact" className={"bg-gradient-to-b from-purple-100 via-gray-200 to-gray-300"}>
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800">
                    צור קשר
                </h2>
                <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-600">
                    {"לפרטים ושאלות פנו אלינו באמצעות וואטסאפ או מסנג'ר"}
                </p>
                <LazyLoad>
                    <ContactMethods/>
                </LazyLoad>
            </div>
        </SectionRef>
    );
}