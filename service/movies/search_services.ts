import {Movies} from "@/src/models/movies";


export const searchMovies = async (
  search: string
): Promise<Movies[]> => {
  const res = await fetch(`/api/movies/search/${search}`);

  if (!res.ok) {
    throw new Error("Error fetching movies");
  }

  return res.json();
};