"use client";
import {Analytics} from "@vercel/analytics/react";
import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import React, {useState} from "react";
import {HoveredLink, Menu, MenuItem, ProductItem} from "@/components/ui/navbar-menu";
import {cn} from "@/lib/utils";
import {FloatingNav} from "@/components/ui/floating-navbar";
import {Navbar} from "@/components/ui/navbar";
import {IconHome, IconMessage, IconUser} from "@tabler/icons-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

// function Navbar({className}: { className?: string }) {
//     const [active, setActive] = useState<string | null>(null);
//     return (
//         <div
//             className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//         >
//             <Menu setActive={setActive}>
//                 <MenuItem setActive={setActive} active={active} item="Services">
//                     <div className="flex flex-col space-y-4 text-sm">
//                         <HoveredLink href="/web-dev">Web Development</HoveredLink>
//                         <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//                         <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//                         <HoveredLink href="/branding">Branding</HoveredLink>
//                     </div>
//                 </MenuItem>
//                 <MenuItem setActive={setActive} active={active} item="Products">
//                     <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//                         <ProductItem
//                             title="Algochurn"
//                             href="https://algochurn.com"
//                             src=""
//                             description="Prepare for tech interviews like never before."
//                         />
//                     </div>
//                 </MenuItem>
//                 <HoveredLink href="/about">About</HoveredLink>
//                 <MenuItem setActive={setActive} active={active} item="Pricing">
//                     <div className="flex flex-col space-y-4 text-sm">
//                         <HoveredLink href="/hobby">Hobby</HoveredLink>
//                         <HoveredLink href="/individual">Individual</HoveredLink>
//                         <HoveredLink href="/team">Team</HoveredLink>
//                         <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//                     </div>
//                 </MenuItem>
//             </Menu>
//         </div>
//     );
// }

function FloatingNavDemo() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },
        {
            name: "About",
            link: "/about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },
        {
            name: "Shop",
            link: "/contact",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white"/>
            ),
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems}/>
        </div>
    );
}

// export const metadata: Metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Analytics/>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased dark m-0 p-0`}
        >
        <Navbar/>

        {children}

        <div className="dark">
            {/*<FloatingNavDemo/>*/}
            <div
                className="h-96 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <footer
                    className="footer footer-center p-5 text-primary-content flex flex-col items-center justify-center text-center">
                    <aside className="flex flex-col items-center justify-center">
                        <img
                            src="https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/VNext.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1ZOZXh0LnN2ZyIsImlhdCI6MTcxMDUwNzAzMiwiZXhwIjozMzIxNDk3MTAzMn0.Me_Q0FMVxMxv1iW7Tsz5vi7fKBbBouf3T6_MNz-MDDU&t=2024-03-15T12%3A50%3A42.474Z"
                            alt="image"
                            width="80"
                            height="80"
                            className="mx-auto"
                        />

                        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-5 text-sm md:text-lg font-bold text-transparent sm:text-sm text-center">
                            VNext Ltd. <br/>Providing the best gaming community since 2021
                        </p>

                        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-2 font-bold text-transparent text-center">
                            Copyright © 2024 - All right reserved <br/> Designed,Coded and programmed
                            with ❤️ by Carnoval15 (discord)
                        </p>
                    </aside>
                </footer>

            </div>
        </div>
        </body>
        </html>
    );
}
