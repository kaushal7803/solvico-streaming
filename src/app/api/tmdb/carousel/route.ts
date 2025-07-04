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
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
        },
      }
    );

    const results = response.data.results.slice(0, 5).map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      genres: movie.genre_ids,
      backdrop_path: movie.backdrop_path,
    }));

    return new NextResponse(JSON.stringify(results), {
      status: 200,
      headers: corsHeaders(),
    });
  } catch (error) {
    console.error("Server Error - Carousel:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch carousel movies" }),
      {
        status: 500,
        headers: corsHeaders(),
      }
    );
  }
}

// ✅ Handle CORS Preflight request (OPTIONS)
export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

// ✅ Reusable CORS headers
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*", // Or restrict to your domain
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };
}
