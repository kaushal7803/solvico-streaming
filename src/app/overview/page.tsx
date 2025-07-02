"use client"

import Image from "next/image"
import banner_img from "../../../public/assets/images/bg_3.jpeg"
import banner_img2 from "../../../public/assets/images/bg_2.jpeg"

export default function MovieOverview() {
    const castMembers = [
        { name: "Chris Pratt", image: "/placeholder.svg?height=120&width=120" },
        { name: "Anya Taylor-Joy", image: "/placeholder.svg?height=120&width=120" },
        { name: "Charlie Day", image: "/placeholder.svg?height=120&width=120" },
        { name: "Jack Black", image: "/placeholder.svg?height=120&width=120" },
        { name: "Gordon", image: "/placeholder.svg?height=120&width=120" },
    ]

    const recommendations = [
        { image: "/placeholder.svg?height=300&width=200" },
        { image: "/placeholder.svg?height=300&width=200" },
        { image: "/placeholder.svg?height=300&width=200" },
    ]

    return (
        <div className="min-h-screen bg-[#181A20] text-white">
            {/* Hero Section */}
            <div className="relative">
                <div className="absolute inset-0">
                    <Image src={banner_img} alt="The Super Mario Bros. Movie Hero" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#181A20] via-[$181A20] to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181A20] via-transparent to-transparent" />
                </div>

                <div className="relative max-w-5xl   z-10 flex flex-col lg:flex-row items-start gap-6 lg:gap-8 p-4 sm:p-6 lg:p-12 min-h-[50vh] sm:min-h-[70vh] lg:min-h-[75vh]">
                    {/* Movie Poster */}
                    <div className="flex-shrink-0 w-44 sm:w-56 lg:w-64">
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src={banner_img2}
                                alt="The Super Mario Bros. Movie Poster"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Movie Info */}
                    <div className="flex-1 space-y-4 lg:space-y-6 max-w-2xl">
                        <div className="space-y-3 lg:space-y-4">
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                The Super Mario Bros. Movie
                            </h1>

                            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-300">
                                <span>2023</span>
                                <span>•</span>
                                <span>7:1</span>
                                <span>•</span>
                                <span>PG</span>
                                <span>•</span>
                                <span>1h 32 m</span>
                            </div>
                        </div>

                        {/* Netflix Info */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">N</span>
                                </div>
                                <span className="text-lg font-medium">Netflix</span>
                            </div>
                            <span className="text-gray-300">1 Season • 8 Episodes</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="px-4 sm:px-6 lg:px-12 pb-12 space-y-8 lg:space-y-12">
                {/* Synopsis */}
                <section className="space-y-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Synopsis</h2>
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-4xl">
                        A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a
                        captured princess. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae deleniti atque tempora et nihil autem consequatur, eaque magni harum at sed maxime aliquam, perferendis nostrum explicabo architecto, reprehenderit fugiat! Harum repudiandae distinctio, hic quos facilis sequi voluptate. Minima, ut.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Cast</h2>
                    <div className="flex gap-4 sm:gap-7 overflow-x-auto scrollbar-hide pb-2">
                        {castMembers.map((member, index) => (
                            <div key={index} className="text-center space-y-3 flex-shrink-0 w-24 lg:w-28">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto">
                                    <Image
                                        src={banner_img2 || "/placeholder.svg"}
                                        alt={member.name}
                                        fill
                                        className="object-cover rounded-full"
                                    />
                                </div>
                                <p className="text-xs sm:text-sm lg:text-base font-medium">{member.name}</p>
                            </div>
                        ))}
                    </div>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Trailer</h2>
                    <div className="flex items-center gap-3 py-4 px-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors cursor-pointer w-fit ">
                        <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                            <svg className="w-4 h-4 text-white " fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <span className="text-lg font-medium">YouTube</span>
                    </div>
                </section>

                {/* Recommendations */}
                <section className="space-y-6">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">People who like this also like</h2>
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                        {recommendations.map((item, index) => (
                            <div
                                key={index}
                                className="relative aspect-[2/3] w-32 sm:w-36 lg:w-52 flex-shrink-0 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                            >
                                <Image
                                    src={banner_img2 || "/placeholder.svg"}
                                    alt={`Recommendation ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    )
}
