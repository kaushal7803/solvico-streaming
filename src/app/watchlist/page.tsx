import Image from "next/image";

import SideBar from "@/components/SideBar";
import SideBarMobile from "@/components/SideBarMobile";
import watchlist_image from "../../../public/assets/images/watchlist.png"
import watchlist_image2 from "../../../public/assets/images/watchlist_2.png"
import watchlist_image3 from "../../../public/assets/images/watchlist_3.png"


export default function Watchlist() {
    return (
        <div className=" min-h-dvh relative bg-[#181A20] text-white overflow-hidden">
            <div className="absolute top-0 left-0 md:w-[300px] h-[180px] w-[180px] md:h-[300px] bg-gradient-to-r from-[#C25FFF] to-[#8A88FB] opacity-40 blur-[200px] rounded-full pointer-events-none z-0" />

            <div className="absolute bottom-0 right-0 md:w-[300px] h-[180px] w-[180px] md:h-[300px] bg-gradient-to-r from-[#C25FFF] to-[#8A88FB] opacity-40 blur-[200px] rounded-full pointer-events-none z-0" />
            <div className=" relative z-10">
                <SideBar />

                <div className="pb-20   px-4 sm:px-6 lg:px-12 lg:pb-0 flex-1  lg:ml-8 rounded-b-xl w-full min-h-screen overflow-auto bg-[#181A20]">

                    <div className="flex flex-col pb-10 max-w-7xl mx-auto">

                        <div className="flex items-center py-4 sm:py-6 justify-center ">


                            <h2 className="font-medium text-2xl sm:text-3xl">Wishlist</h2>
                        </div>

                        <div className="flex-col flex space-y-4 w-full">
                            <div className="w-full flex bg-[#252836] p-4 rounded-3xl items-center gap-4 lg:gap-8">
                                {/* Image Section with fixed width, height, and aspect ratio */}
                                <div className="sm:w-[220px] sm:h-[140px] w-[170px] h-[120px] lg:w-[300px] lg:h-[200px]">
                                    <div className="relative aspect-[16/9] w-full h-full overflow-hidden rounded-2xl">
                                        <Image
                                            src={watchlist_image}
                                            alt="Movie Poster"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>


                                <div className="flex-1 flex flex-col space-y-7">
                                    <div className="flex flex-col space-y-2">
                                        <h4 className="text-sm sm:text-xl font-medium">Action</h4>
                                        <h4 className="text-base sm:text-2xl font-medium">Elemental</h4>
                                    </div>

                                    <div className="flex items-center space-x-2">


                                        <span className="text-[#92929D] text-sm sm:text-xl">Movie</span>
                                        <span className="text-[#FF8700] text-sm sm:text-xl font-semibold">4.5</span>

                                    </div>

                                </div>
                            </div>

                            <div className="w-full flex bg-[#252836] p-4 rounded-3xl items-center gap-4 lg:gap-8">
                                {/* Image Section with fixed width, height, and aspect ratio */}
                                <div className="sm:w-[220px] sm:h-[140px] w-[170px] h-[120px] lg:w-[300px] lg:h-[200px]">
                                    <div className="relative aspect-[16/9] w-full h-full overflow-hidden rounded-2xl">
                                        <Image
                                            src={watchlist_image2}
                                            alt="Movie Poster"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>


                                <div className="flex-1 flex flex-col space-y-7">
                                    <div className="flex flex-col space-y-2">
                                        <h4 className="text-sm sm:text-xl font-medium">Action</h4>
                                        <h4 className="text-base sm:text-2xl font-medium">Elemental</h4>
                                    </div>

                                    <div className="flex items-center space-x-2">


                                        <span className="text-[#92929D] text-sm sm:text-xl">Movie</span>
                                        <span className="text-[#FF8700] text-sm sm:text-xl font-semibold">4.5</span>

                                    </div>

                                </div>
                            </div>


                            <div className="w-full flex bg-[#252836] p-4 rounded-3xl items-center gap-4 lg:gap-8">
                                {/* Image Section with fixed width, height, and aspect ratio */}
                                <div className="sm:w-[220px] sm:h-[140px] w-[170px] h-[120px] lg:w-[300px] lg:h-[200px]">
                                    <div className="relative aspect-[16/9] w-full h-full overflow-hidden rounded-2xl">
                                        <Image
                                            src={watchlist_image3}
                                            alt="Movie Poster"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>


                                <div className="flex-1 flex flex-col space-y-7">
                                    <div className="flex flex-col space-y-2">
                                        <h4 className="text-sm sm:text-xl font-medium">Action</h4>
                                        <h4 className="text-base sm:text-2xl font-medium">Elemental</h4>
                                    </div>

                                    <div className="flex items-center space-x-2">


                                        <span className="text-[#92929D] text-sm sm:text-xl">Movie</span>
                                        <span className="text-[#FF8700] text-sm sm:text-xl font-semibold">4.5</span>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <SideBarMobile />
                </div>
            </div>
        </div>
    );
}
