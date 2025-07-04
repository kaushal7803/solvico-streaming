"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import { StaticImageData } from "next/image";

interface Movie {
    id: number;
    title: string;
    image: string | StaticImageData;
}

interface MovileSliderProps {
    movies: Movie[];
    title?: string;
}

const MovileSlider: React.FC<MovileSliderProps> = ({ movies, title = "Movies" }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);

    const checkScrollButtons = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScrollButtons();
        const handleResize = () => checkScrollButtons();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [movies]);

    const scroll = (direction: "left" | "right") => {
        const container = scrollContainerRef.current;
        if (container && !isScrolling) {
            setIsScrolling(true);
            const scrollAmount = container.clientWidth * 0.8;
            const targetScroll =
                direction === "left"
                    ? container.scrollLeft - scrollAmount
                    : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: targetScroll,
                behavior: "smooth",
            });

            setTimeout(() => {
                setIsScrolling(false);
                checkScrollButtons();
            }, 500);
        }
    };

    const handleScroll = () => {
        if (!isScrolling) {
            checkScrollButtons();
        }
    };

    return (
        <section className="relative lg:mr-8">
            <div className="flex items-center justify-between mb-2 lg:mb-4">
                <h2 className="text-lg lg:text-2xl font-semibold text-white">{title}</h2>

                <div className="hidden sm:flex items-center gap-2">
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft || isScrolling}
                        className={`p-2 rounded-full transition-all duration-200 ${canScrollLeft && !isScrolling
                            ? "bg-white/10 hover:bg-white/20 text-white hover:scale-110 active:scale-95"
                            : "bg-white/5 text-white/30 cursor-not-allowed"
                            }`}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="lg:w-4 lg:h-4 w-3 h-3" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight || isScrolling}
                        className={`p-2 rounded-full transition-all duration-200 ${canScrollRight && !isScrolling
                            ? "bg-white/10 hover:bg-white/20 text-white hover:scale-110 active:scale-95"
                            : "bg-white/5 text-white/30 cursor-not-allowed"
                            }`}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="lg:w-4 lg:h-4 w-3 h-3" />
                    </button>
                </div>
            </div>

            <div className="relative">
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-3 lg:gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MovileSlider;
