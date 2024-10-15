import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import {StoreProvider} from "@/components/StoreProvider";
import AuthProviders from "@/components/Auth/AuthProviders";
import 'aos/dist/aos.css';
import NavBarV2 from "@/components/navbarTest/NavBarV2";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "EcoShop",
    description: "EcoShop is a simple e-commerce application.",
};

export default async function RootLayout({
                                             children,
                                             modal
                                         }:
                                             Readonly<{
                                                 children: React.ReactNode,
                                                 modal: React.ReactNode,
                                             }>) {


    return (
        <html dir={"rtl"} lang="en">
        <body className={`${inter.className} `}>
        <AuthProviders>
            <StoreProvider>
                <div className="min-h-screen flex flex-col bg-gray-100">
                    <NavBarV2/>
                    {/*<Navbar/>*/}
                    <main className="flex-grow">{children}</main>
                    <Footer/>
                    {modal}
                </div>
            </StoreProvider>
        </AuthProviders>
        </body>
        </html>
    );
}