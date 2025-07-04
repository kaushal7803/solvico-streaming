import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


const MovieCard = ({ movie }: { movie: { id: number; title: string; image: StaticImageData | string } }) => {
  return (
    <Link href={"/overview"}>
      <div key={movie.id} className="flex-shrink-0 group cursor-pointer">
        <div className="relative w-32 h-44 sm:w-32 sm:h-56 md:w-36 md:h-64 lg:w-48 lg:h-72 rounded-md md:rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg">

          <Image
            src={movie.image || "/placeholder.svg"}
            alt={movie.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 192px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xs lg:text-sm font-medium truncate">{movie.title}</p>
          </div>
        </div>
      </div></Link>
  );
};

export default MovieCard;
