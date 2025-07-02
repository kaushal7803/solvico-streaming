"use client"

import Image from "next/image"
import {
  HomeIcon,
  MagnifyingGlassIcon,
  TvIcon,
  TrashIcon,
  Cog6ToothIcon,
  PlayIcon,
  CircleStackIcon,
  ClockIcon,
} from "@heroicons/react/24/outline"
import bg_left_overlay from "../../public/assets/images/bg_left_overlay.png"
import movie_card_img from "../../public/assets/images/movie_card.jpg"
import banner_img from "../../public/assets/images/bg_3.jpeg"
import banner_img2 from "../../public/assets/images/bg_2.jpeg"
import banner3 from "../../public/assets/images/img1.png"
import { ChevronLeft, ChevronRight } from "lucide-react"

import MovieCard from "@/components/MovieCard"
import HorizontalSlider from "@/components/horizontal-slider"
import { useEffect, useRef, useState } from "react"
import SideBar from "@/components/SideBar"
import MovileSlider from "@/components/MovileSlider"
import SideBarMobile from "@/components/SideBarMobile"
const topRatedMovies = [
  { id: 1, title: "Spider-Man", image: movie_card_img },
  { id: 2, title: "Spider-Man: Homecoming", image: movie_card_img },
  { id: 3, title: "Criminal Justice", image: movie_card_img },
  { id: 4, title: "Kesari Chapter 2", image: movie_card_img },
  { id: 5, title: "Game of Thrones", image: movie_card_img },
  { id: 6, title: "Padhakkam", image: movie_card_img },
  { id: 7, title: "Shiddat", image: movie_card_img },
  { id: 8, title: "Movie 8", image: movie_card_img },
  { id: 9, title: "Movie 9", image: movie_card_img },
  { id: 10, title: "Movie 10", image: movie_card_img },
]

const comedyMovies = [
  { id: 1, title: "Jumanji: The Next Level", image: movie_card_img },
  { id: 2, title: "Munjya", image: movie_card_img },
  { id: 3, title: "Padhakkam", image: movie_card_img },
  { id: 4, title: "Housefull 4", image: movie_card_img },
  { id: 5, title: "Total Dhamaal", image: movie_card_img },
  { id: 6, title: "Husband Ki Biwi", image: movie_card_img },
  { id: 7, title: "Pee Olu", image: movie_card_img },
  { id: 8, title: "Comedy 8", image: movie_card_img },
  { id: 9, title: "Comedy 9", image: movie_card_img },
  { id: 10, title: "Comedy 10", image: movie_card_img },
]

const sidebarItems = [
  { icon: HomeIcon, active: true },
  { icon: MagnifyingGlassIcon, active: false },
  { icon: TvIcon, active: false },
  // { icon: TrashIcon, active: false },
  // { icon: Cog6ToothIcon, active: false },
  // { icon: PlayIcon, active: false },
  // { icon: CircleStackIcon, active: false },
  // { icon: ClockIcon, active: false },
]


const slidesData = [
  {
    id: 1,
    image: banner_img,
    title: "The Super Mario Bros",
    genres: ["Animation", "Adventure", "Comedy"],
  },
  {
    id: 2,
    image: banner_img2,
    title: "Spider-Man: Into the Spider-Verse",
    genres: ["Animation", "Action", "Adventure"],
  },
  {
    id: 3,
    image: banner3,
    title: "Avengers: Endgame",
    genres: ["Action", "Adventure", "Drama"],
  },
  {
    id: 4,
    image: banner_img2,
    title: "The Lion King",
    genres: ["Animation", "Drama", "Family"],
  },
  {
    id: 5,
    image: banner_img,
    title: "Inception",
    genres: ["Action", "Sci-Fi", "Thriller"],
  },
]


export default function StreamingApp() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const handleResize = () => checkScrollButtons()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [topRatedMovies])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current && !isScrolling) {
      setIsScrolling(true)
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
      const targetScroll =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      })

      // Reset scrolling state after animation
      setTimeout(() => {
        setIsScrolling(false)
        checkScrollButtons()
      }, 500)
    }
  }

  const handleScroll = () => {
    if (!isScrolling) {
      checkScrollButtons()
    }
  }
  return (
    <div className=" min-h-dvh relative bg-[#181A20] text-white overflow-hidden">
      <div className="absolute top-0 left-0 md:w-[300px] h-[180px] w-[180px] md:h-[300px] bg-gradient-to-r from-[#C25FFF] to-[#8A88FB] opacity-40 blur-[200px] rounded-full pointer-events-none z-0" />



      <div className="absolute bottom-0 right-0 md:w-[300px] h-[180px] w-[180px] md:h-[300px] bg-gradient-to-r from-[#C25FFF] to-[#8A88FB] opacity-40 blur-[200px] rounded-full pointer-events-none z-0" />
      <div className=" relative z-10">



        <SideBar />

        {/* Main Content */}
        <div className="pb-20 lg:pb-0 flex-1 lg:ml-14 rounded-b-xl w-full min-h-screen overflow-auto bg-[#181A20]">

          <HorizontalSlider slides={slidesData} autoPlay={true} autoPlayInterval={4000} />

          <div className="p-4 lg:p-8 space-y-6 md:space-y-8">


            <section className="relative lg:mr-8">
              <div className="flex items-center justify-between mb-2 lg:mb-4">
                <h2 className="text-lg lg:text-2xl font-semibold text-white">Trending Movies</h2>


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

              <div className="relative ">





                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex gap-3 lg:gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {topRatedMovies.map((movie, idx) => (
                    <MovieCard key={idx} movie={movie} />

                  ))}
                </div>
              </div>


            </section>


            {/* <section>
              <h2 className="text-lg lg:text-2xl font-semibold text-white mb-2 lg:mb-4">Trending TV Shows</h2>


              <div className="relative">
                <div className="flex gap-3 lg:gap-4 overflow-x-auto scrollbar-hide  scroll-smooth">
                  {comedyMovies.map((movie, idx) => (
                    <MovieCard key={idx} movie={movie} />

                  ))}
                </div>
              </div>
            </section> */}

            <MovileSlider title="Trending TV Shows" movies={comedyMovies} />



            {/* <section>
              <h2 className="text-lg lg:text-2xl font-semibold text-white mb-2 lg:mb-4">Trending Anime</h2>


              <div className="relative">
                <div className="flex gap-3 lg:gap-4 overflow-x-auto scrollbar-hide  scroll-smooth">
                  {comedyMovies.map((movie, idx) => (
                    <MovieCard key={idx} movie={movie} />

                  ))}
                </div>
              </div>
            </section> */}

            <MovileSlider title="Trending Anime" movies={comedyMovies} />


            <MovileSlider title="Watchlist" movies={comedyMovies} />

          </div>


          <SideBarMobile />






        </div>
      </div>
    </div>
  )
}
