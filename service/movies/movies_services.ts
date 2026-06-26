import { Movies } from "@/src/models/movies";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getMovies = async (): Promise<Movies[]> => {
  const res = await fetch(`/api/movies/getmovies`);

  if (!res.ok) {
    throw new Error("Error al obtener películas");
  }

  return res.json();
};