import { movieGenres } from "@/src/models/movie_genres";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getMoviesGenres = async (): Promise<movieGenres[]> => {
  const res = await fetch(`${API_URL}/movies_genres`);
  const data = await res.json();

  return data;
};