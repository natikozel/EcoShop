"use client";

import {setSection} from "@/store/slices/SectionSlice";
import {AppDispatch} from "@/interfaces/store/store";
import {useDispatch} from "react-redux";
import {NavbarCategoryProps} from "@/interfaces/NavbarCategory";
import React, {ReactNode} from "react";
import {usePathname, useRouter} from "next/navigation";

export default function SectionSlider({
                                          children,
                                          item,
                                          style = "first:mx-6 hover:text-indigo-600 transition-colors"
                                      }:
                                          { children?: ReactNode, item: NavbarCategoryProps | undefined, style?: string }) {
    const dispatch: AppDispatch = useDispatch();
    const path = usePathname();
    const router = useRouter();

    return item ? (
        <button
            onClick={() => {
                dispatch(setSection((item.eng.toLowerCase())));
                if (path !== "/")
                    router.push("/");
            }}
            className={style}>
            {item.heb}
            {children ?? null}
        </button>
    ) : <p>No category found to slide into</p>;
};
