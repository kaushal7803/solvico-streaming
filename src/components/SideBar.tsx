"use client"

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { HomeIcon, TvIcon } from 'lucide-react';
import React from 'react'
import HomeSvg from '../../public/assets/svgs/HomeSvg';
import SearchSvg from '../../public/assets/svgs/SearchSvg';
import WatchListSvg from '../../public/assets/svgs/WatchListSvg';
import path from 'path';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const SideBar = () => {
    const pathname = usePathname();
    const sidebarItems = [
        { icon: HomeSvg, active: true, path: "/" },
        { icon: SearchSvg, active: false, path: "/find" },
        { icon: WatchListSvg, active: false, path: "/watchlist" },

    ];


    return (
        <div className="hidden bg-[#181A20] lg:flex fixed lg:justify-between left-0 top-0 h-full w-20  flex-col items-center py-6 z-10">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[150px] h-8 bg-[#8A88FB] blur-2xl opacity-20 z-0 rounded-full" />

            <div className="mb-8">
                <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>

            <nav className="flex flex-col space-y-6">
                {sidebarItems.map((item, index) => {
                    const isActive = pathname === item.path;

                    return (
                        <Link
                            key={index}
                            href={item.path}
                            className={`p-2 rounded-lg transition-colors duration-200 ${isActive
                                ? "text-white"
                                : "text-gray-400 hover:text-white hover:bg-gray-800"
                                }`}
                        >
                            <item.icon
                                className={`w-6 h-6 transition-all duration-300 ${isActive ? "drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]" : ""
                                    }`}
                            />
                        </Link>

                    );
                })}


            </nav>

            <div></div>
        </div>
    )
}

export default SideBar