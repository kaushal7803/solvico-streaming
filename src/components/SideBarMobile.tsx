"use client"

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import HomeSvg from '../../public/assets/svgs/HomeSvg';
import SearchSvg from '../../public/assets/svgs/SearchSvg';
import WatchListSvg from '../../public/assets/svgs/WatchListSvg';
const SideBarMobile = () => {
    const pathname = usePathname();
    const sidebarItems = [
        { icon: HomeSvg, active: true, path: "/" },
        { icon: SearchSvg, active: false, path: "/find" },
        { icon: WatchListSvg, active: false, path: "/watchlist" },

    ];
    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 rounded-t-4xl bg-[#181A20] shadow-xl overflow-hidden z-20">
            {/* Outer glow */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[150px] h-8 bg-[#C25FFF] blur-2xl opacity-10 z-0 rounded-full" />

            <div className="flex justify-around py-5 relative z-10">
                {sidebarItems.slice(0, 5).map((item, index) => {

                    const isActive = pathname === item.path;
                    return (

                        <Link href={item?.path}
                            key={index}
                            className={`p-3 rounded-lg transition-colors duration-200 ${isActive
                                ? "bg-[#2F2F3C] text-white"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            <item.icon className="w-6 h-6" />
                        </Link>



                    )
                })}
            </div>
        </div>
    )
}

export default SideBarMobile