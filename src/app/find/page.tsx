"use client"

import Image from "next/image";
import star_svg from "../../../public/assets/images/start_svg.svg"

import SideBar from "@/components/SideBar";
import SideBarMobile from "@/components/SideBarMobile";
import img1 from "../../../public/assets/images/img1.png"
import img2 from "../../../public/assets/images/img2.png"
import img3 from "../../../public/assets/images/img3.png"
import img4 from "../../../public/assets/images/img4.png"
import img5 from "../../../public/assets/images/watchlist.png"
import img6 from "../../../public/assets/images/watchlist_2.png"
import img7 from "../../../public/assets/images/watchlist_3.png"

import { AnimatePresence, motion } from 'framer-motion';
import movie_img from "../../../public/assets/images/movie_card.png"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { title } from "process";
import { useState } from "react";
import FilterSvg from "../../../public/assets/svgs/FilterSvg";


const categories: string[] = [
    'Available for Download',
    'Action & Adventure',
    'Anime',
    'Black Stories',
    'British',
    'Classic & Cult',
    'Comedies',
    'Crime',
    'Docuseries'
];

const recommendations = [
    { image: img1, title: "Venom - Let there Be Carnage" },
    { image: img2, title: "Divergent" },
    { image: img3, title: "Madagascar" },
    { image: img4, title: "Spiderman - No Way Home" },
    { image: img5, title: "Spiderman - No Way Home" },
    { image: img6, title: "Spiderman - No Way Home" },
    { image: img7, title: "Spiderman - No Way Home" },


]
export default function FindSort() {

    const [activeType, setActiveType] = useState("All");

    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [selected, setSelected] = useState<string[]>([]);

    const toggleCategory = (category: string) => {
        setSelected(prev =>
            prev.includes(category)
                ? prev.filter(item => item !== category)
                : [...prev, category]
        );
    };

    const handleApply = () => {
        console.log('Selected Categories:', selected);
        setShowPopup(false);
        // You can emit selected categories to parent here if needed
    };
    return (
        <div className=" min-h-dvh relative bg-[#181A20] text-white overflow-hidden">
            <div className="absolute top-0 left-0 md:w-[300px] h-[180px] w-[180px] md:h-[300px] bg-gradient-to-r from-[#C25FFF] to-[#8A88FB] opacity-40 blur-[200px] rounded-full pointer-events-none z-0" />

            <div className="absolute bottom-0 right-0 md:w-[300px] h-[180px] w-[180px] md:h-[300px] bg-gradient-to-r from-[#C25FFF] to-[#8A88FB] opacity-40 blur-[200px] rounded-full pointer-events-none z-0" />
            <div className=" relative z-10">
                <SideBar />

                <div className="pb-20   px-4 sm:px-6 lg:px-12 lg:pb-0 flex-1  lg:ml-8 rounded-b-xl w-full min-h-screen overflow-auto bg-[#181A20]">

                    <div className="flex flex-col pb-10 max-w-7xl mx-auto">


                        <div className="w-full py-8 relative flex sm:text-base text-sm items-center justify-between">

                            <div className="flex items-center space-x-3 sm:space-x-6">
                                {["All", "Series", "Movies"].map((type) => (
                                    <span
                                        key={type}
                                        onClick={() => setActiveType(type)}
                                        className={`px-6 py-1 rounded-full cursor-pointer transition-colors duration-200 ${activeType === type
                                            ? "bg-[#4643DF] text-white"
                                            : "text-[#838AA0] hover:text-white"
                                            }`}
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>


                            <AnimatePresence>
                                {showPopup && (
                                    <motion.div
                                        className="fixed inset-0 z-50 bg-black/50 px-6 flex items-center justify-center"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 30 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative bg-[#1c1c1e]  rounded-xl max-w-lg max-h-[80vh] p-5 pt-10 text-white flex flex-col">
                                            <button
                                                onClick={() => setShowPopup(false)}
                                                className="absolute top-3 right-3 text-xl"
                                                aria-label="Close"
                                            >
                                                ×
                                            </button>

                                            {/* Scrollable List */}
                                            <div className="overflow-y-auto scrollbar-hide flex-1 pr-2 space-y-3 sm:text-base text-sm">
                                                {categories.map((category, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => toggleCategory(category)}
                                                        disabled={category === 'Docuseries'}
                                                        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${selected.includes(category)
                                                            ? 'bg-[#0000004D] text-white'
                                                            : 'bg-transparent text-gray-300 hover:bg-[#2a2a2e]'
                                                            } `}
                                                    >
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Fixed Apply Button */}
                                            <div className="sticky sm:text-base text-sm bottom-0 left-0 right-0  pt-4 pb-2 flex justify-between gap-4">
                                                <button
                                                    // onClick={handleReset}
                                                    className="w-1/2 bg-transparent border border-gray-400 hover:border-white text-gray-300 hover:text-white py-2 rounded-md transition"
                                                >
                                                    Reset
                                                </button>
                                                <button
                                                    onClick={handleApply}
                                                    className="w-1/2 bg-[#4643DF] hover:bg-[#c71f1f] text-white py-2 rounded-md font-semibold transition"
                                                >
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>





                            <button onClick={() => setShowPopup(true)} className="sm:w-6 sm:h-6 w-5 h-5">
                                <FilterSvg className="w-full h-full text-[#F3F3F3] transition-colors cursor-pointer" /></button>




                        </div>
                        <section className="space-y-6">
                            {/* <h2 className="text-2xl lg:text-3xl font-bold">People who like this also like</h2> */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-4 sm:space-y-0 space-y-4">
                                {recommendations.map((item, index) => (
                                    <div key={index} className="hover:scale-105 flex flex-col space-y-2 transition-transform duration-300">
                                        <div

                                            className="relative aspect-[16/9] rounded-sm overflow-hidden  cursor-pointer"
                                        >
                                            <Image
                                                src={item?.image || "/placeholder.svg"}
                                                alt={`Recommendation ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />





                                        </div>

                                        <div className="px-1 sm:px-3 flex flex-col space-y-1">
                                            <h2 className="sm:text-base text-sm sm:line-clamp-none line-clamp-1">{item?.title}</h2>
                                            <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-base text-gray-300 opacity-70">
                                                <span>2023</span>

                                                <span>•</span>
                                                <span>1h 32 m</span>
                                            </div>
                                        </div>




                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    <SideBarMobile />
                </div>
            </div>
        </div >
    );
}
