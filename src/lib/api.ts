// src/lib/api.ts
import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
});

export const fetchCarouselMovies = async () => {
  try {
    const response = await client.get("/api/tmdb/carousel");
    return response.data;
  } catch (error) {
    console.error("Error fetching carousel movies:", error);
    throw new Error("Failed to fetch carousel movies");
  }
};
