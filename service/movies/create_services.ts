import { Movies } from "@/src/models/movies";

export const createMovie = async (movie: Movies) => {
  const res = await fetch("/api/movies/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });

  if (!res.ok) throw new Error("Error al crear película");

  return res.json();
};