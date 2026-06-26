import { Movies } from "@/src/models/movies";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getMovies = async (): Promise<Movies[]> => {
  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  return data;
};

export const searchMovies = async (search: string): Promise<Movies[]> => {
  const res = await fetch(`${API_URL}/movies/search/${search}`);
  const data = await res.json();
  return data;
};

export const getYearMovie = async (year: number): Promise<Movies[]> => {
  const res = await fetch(`${API_URL}/movies/year/${year}`);
  const data = await res.json();
  return data;
};

export const createMovie = async (movie: Movies) => {
  const res = await fetch(`${API_URL}/movies/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });

  if (!res.ok) throw new Error("Error al crear película");

  return res.json();
};

export const updateMovie = async (movieId: number, movie: Partial<Movies>) => {
  const res = await fetch(`${API_URL}/movies/update/${movieId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });

  if (!res.ok) throw new Error("Error al actualizar película");

  return res.json();
};

export const deleteMovie = async (movieId: number) => {
  const res = await fetch(`${API_URL}/movies/${movieId}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error al eliminar película");

  return res.json();
};