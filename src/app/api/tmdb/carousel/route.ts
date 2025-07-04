// src/app/api/tmdb/carousel/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  backdrop_path: string;
}
export async function GET() {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week",
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    const results = response.data.results.slice(0, 5).map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      genres: movie.genre_ids,
      backdrop_path: movie.backdrop_path,
    }));

    return NextResponse.json(results);
  } catch (error) {
    console.error("Server Error - Carousel:", error);
    return NextResponse.json(
      { error: "Failed to fetch carousel movies" },
      { status: 500 }
    );
  }
}
