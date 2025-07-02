"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import banner_img from "../../../public/assets/images/bg_2.jpeg"
import banner_img2 from "../../../public/assets/images/bg_3.jpeg"
import banner_img3 from "../../../public/assets/images/bg_4.jpeg"
import banner_img4 from "../../../public/assets/images/banner_img.png"

const slides = [
    {
        id: 1,
        image: banner_img,
        gradient: "from-purple-600 to-pink-600",
    },
    {
        id: 2,
        image: banner_img2,
        gradient: "from-blue-500 to-cyan-400",
    },
    {
        id: 3,
        image: banner_img3,
        gradient: "from-indigo-600 to-purple-500",
    },
    {
        id: 4,
        image: banner_img4,
        gradient: "from-green-500 to-emerald-400",
    },

]

export default function Component() {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        }, 3000) // Slide every 3 seconds

        return () => clearInterval(interval)
    }, [])

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className="w-full h-screen bg-[#181A20]  relative flex py-0 sm:py-12 justify-center overflow-hidden">

            <div className="absolute top-0 left-0 md:w-[180px] h-[180px] w-[180px] md:h-[180px] bg-gradient-to-r from-[#C25FFF] to-[#8A88FB] opacity-20 blur-[180px] rounded-full pointer-events-none z-0" />



            <div className="absolute bottom-0 right-0 md:w-[180px] h-[180px] w-[180px] md:h-[180px] bg-gradient-to-r from-[#C25FFF] to-[#8A88FB] opacity-20 blur-[180px] rounded-full pointer-events-none z-0" />
            <div className="relative w-full max-w-[1400px] mx-auto px-8 z-10">
                {/* Main Slider Container */}
                <div className="relative h-60 sm:h-80 mb-0 sm:mb-12 px-4">
                    <div className="flex items-center justify-center mx-4 sm:mx-0 px-4 h-full relative">
                        {/* Previous slide (partially visible) */}
                        <motion.div
                            className="absolute left-0 z-10 transform -translate-x-16"
                            initial={{ opacity: 0.4, scale: 0.85 }}
                            animate={{ opacity: 0.4, scale: 0.85 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <div className="sm:w-72 w-40 h-24 lg:w-96 sm:h-52 lg:h-64 rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl">
                                <div
                                    className={`w-full h-full rounded-lg sm:rounded-2xl ${slides[(currentIndex - 1 + slides.length) % slides.length].gradient}`}
                                >
                                    <Image
                                        src={slides[(currentIndex - 1 + slides.length) % slides.length].image || "/placeholder.svg"}
                                        alt=""
                                        className="w-full rounded-lg sm:rounded-2xl h-full object-cover mix-blend-overlay opacity-60"
                                        fill
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Current slide */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="relative z-20"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                            >
                                <div className="lg:w-[650px] lg:h-80 sm:w-[500px] w-[340px] h-48 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl cursor-pointer group relative">
                                    <div className={`w-full h-full  ${slides[currentIndex].gradient} relative`}>
                                        <Image
                                            src={slides[currentIndex].image || "/placeholder.svg"}
                                            alt=""
                                            fill
                                            className="w-full h-full object-cover"
                                        />

                                        <div className="absolute inset-0 bg-black/10" />

                                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Next slide (partially visible) */}
                        <motion.div
                            className="absolute right-0 z-10 transform translate-x-16"
                            initial={{ opacity: 0.4, scale: 0.85 }}
                            animate={{ opacity: 0.4, scale: 0.85 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <div className="sm:w-72 w-40 h-24 lg:w-96 sm:h-52 lg:h-64 rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl">
                                <div
                                    className={`w-full h-full rounded-lg sm:rounded-2xl  ${slides[(currentIndex + 1) % slides.length].gradient}`}
                                >
                                    <Image
                                        src={slides[(currentIndex + 1) % slides.length].image || "/placeholder.svg"}
                                        alt=""
                                        fill
                                        className="w-full rounded-lg sm:rounded-2xl h-full object-cover mix-blend-overlay opacity-60"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center space-x-4">
                    {slides.map((_, index) => (
                        <button key={index} onClick={() => goToSlide(index)} className="relative group focus:outline-none">
                            <div
                                className={`transition-all duration-500 rounded-full ${index === currentIndex ? "sm:w-12 sm:h-3 h-1.5 w-6 bg-purple-500" : "sm:w-3 h-1.5 w-1.5 sm:h-3 bg-white/30 hover:bg-white/50"
                                    }`}
                            />
                            {/* Active dot glow effect */}
                            {index === currentIndex && (
                                <motion.div
                                    className="absolute inset-0 w-6 sm:w-12 sm:h-3 h-1.5 rounded-full bg-purple-400/50 blur-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Auto-slide progress indicator */}
                <div className="mt-8 hidden sm:flex justify-center">
                    <div className="w-24 h-0.5 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            key={currentIndex}
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, ease: "linear" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
