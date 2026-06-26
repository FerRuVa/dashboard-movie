import { Movies } from "@/src/models/movies";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getYearMovie = async (
  year: number
): Promise<Movies[]> => {
    console.log(API_URL);
  const res = await fetch(`/api/movies/getyear/${year}`);

  console.log(res);

  if (!res.ok) {
    throw new Error("Error al obtener películas");
  }

  return res.json();
};