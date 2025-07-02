"use client"

import Image from "next/image";
import star_svg from "../../../public/assets/images/start_svg.svg"

import SideBar from "@/components/SideBar";
import SideBarMobile from "@/components/SideBarMobile";
import watchlist_image from "../../../public/assets/images/watchlist.png"
import watchlist_image2 from "../../../public/assets/images/watchlist_2.png"
import watchlist_image3 from "../../../public/assets/images/watchlist_3.png"
import movie_img from "../../../public/assets/images/movie_card.png"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const recommendations = [
    { image: "/placeholder.svg?height=300&width=200" },
    { image: "/placeholder.svg?height=300&width=200" },
    { image: "/placeholder.svg?height=300&width=200" },
]
export default function Search() {
    return (
        <div className=" min-h-dvh relative bg-[#181A20] text-white overflow-hidden">
            <div className="absolute top-0 left-0 md:w-[300px] h-[180px] w-[180px] md:h-[300px] bg-gradient-to-r from-[#C25FFF] to-[#8A88FB] opacity-40 blur-[200px] rounded-full pointer-events-none z-0" />

            <div className="absolute bottom-0 right-0 md:w-[300px] h-[180px] w-[180px] md:h-[300px] bg-gradient-to-r from-[#C25FFF] to-[#8A88FB] opacity-40 blur-[200px] rounded-full pointer-events-none z-0" />
            <div className=" relative z-10">
                <SideBar />

                <div className="pb-20   px-4 sm:px-6 lg:px-12 lg:pb-0 flex-1  lg:ml-8 rounded-b-xl w-full min-h-screen overflow-auto bg-[#181A20]">

                    <div className="flex flex-col pb-10 max-w-7xl mx-auto">


                        <div className="w-full py-8 relative">
                            <input
                                type="text"
                                placeholder="Type title, categories, years, etc"
                                className="bg-[#252836] h-full w-full py-4 pl-14 pr-8 rounded-full focus:outline-none text-white"
                            />
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-6 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                        <section className="space-y-6">
                            {/* <h2 className="text-2xl lg:text-3xl font-bold">People who like this also like</h2> */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
                                {recommendations.map((item, index) => (
                                    <div key={index} className="hover:scale-105 transition-transform duration-300">
                                        <div

                                            className="relative aspect-[2/3] rounded-t-2xl overflow-hidden  cursor-pointer"
                                        >
                                            <Image
                                                src={movie_img || "/placeholder.svg"}
                                                alt={`Recommendation ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />

                                            <div className="absolute top-2 right-2 backdrop-blur-[20px] rounded-lg bg-[#25283652] px-3 py-1 flex items-center gap-1">
                                                <Image
                                                    src={star_svg}
                                                    alt="Star"
                                                    width={14}
                                                    height={14}
                                                    className="object-contain"
                                                />
                                                <span className="text-[#FF8700] font-medium text-xs sm:text-sm">4.5</span>
                                            </div>




                                        </div>

                                        <div className="bg-[#252836] flex flex-col space-y-0 rounded-b-2xl px-3 py-2 ">
                                            <h2 className="line-clamp-1 sm:text-lg font-medium">The Little Mermaid</h2>
                                            <p className="text-sm sm:text-base text-[#92929D] font-medium">Action</p>
                                        </div>


                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    <SideBarMobile />
                </div>
            </div>
        </div>
    );
}
