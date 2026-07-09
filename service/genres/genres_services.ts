import { Genres } from "@/src/models/genres";


export const getGenres = async (): Promise<Genres[]> => {
  const res = await fetch("/api/genres/getgenres");

  if (!res.ok) {
    throw new Error("Error al obtener géneros");
  }

  const data = await res.json();

  console.log("JSON recibido:", data);

  return data;
};