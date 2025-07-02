"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideData {
  id: number
  image: string
  title: string
  genres: string[]
}

interface HorizontalSliderProps {
  slides: SlideData[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function HorizontalSlider({ slides, autoPlay = true, autoPlayInterval = 5000 }: HorizontalSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length]);




  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  return (
    <div className="px-0 lg:px-8 rounded-bl-2xl">
      <div className="relative w-full h-[450px] md:h-[300px] lg:h-[650px] rounded-bl-2xl overflow-hidden group">
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative w-full h-full flex-shrink-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Bottom Gradient for readability */}
              <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-to-t from-[#181A20] to-transparent z-10" />

              {/* Text content */}
              <div className="absolute bottom-7 sm:bottom-10 left-5 sm:left-8 right-10 z-20 space-y-2 sm:space-y-4">
                <h2 className="text-white text-2xl sm:text-2xl lg:text-4xl font-semibold">{slide.title}</h2>
                <div className="flex flex-wrap gap-3 text-white text-sm lg:text-base font-medium">
                  {slide.genres.map((genre, genreIndex) => (
                    <span key={genreIndex}>{genre}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
            />
          ))}
        </div> */}

      </div>
    </div>
  )
}
