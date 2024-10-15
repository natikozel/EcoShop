"use client";

import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSection} from "@/store/slices/SectionSlice";
import {AppDispatch} from "@/interfaces/store/store";

export const SectionRef = ({children, id, className}: any) => {

    const sectionRef = useRef<any>(null);
    const dispatch: AppDispatch = useDispatch();
    const currentSection = useSelector((state: any) => state.section);

    useEffect(() => {
        if (currentSection === id) {
            sectionRef.current.scrollIntoView({behavior: 'smooth'});
        }
        dispatch(setSection(""));
    }, [currentSection, dispatch, id]);

    return (
        <section id={id} ref={sectionRef} className={`${className ? className : null} py-12 md:py-20`}>
            {children}
        </section>
    );
};
