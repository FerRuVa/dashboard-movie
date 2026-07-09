"use client";

import { useEffect, useState } from "react";
import { Movies } from "@/src/models/movies";
import { getMovies } from "@/service/movies/movies_services";
import { searchMovies } from "@/service/movies/search_services";
import { getYearMovie } from "@/service/movies/year_services";

export function useMovies(autoLoad = true) {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const normalizeMovie = (movie: any): Movies => ({
    id: movie.id,
    title: movie.title,
    description: movie.description,
    duration: movie.duration,
    poster_url: movie.poster_url ?? "",
    release_year: movie.release_year ?? 0,
    country_id: movie.country_id ?? 0,
    video_url: movie.video_url ?? "",
    created_at: new Date(movie.created_at ?? Date.now()),
  });

  const loadMovies = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getMovies();
      setMovies(data.map(normalizeMovie));
    } catch (e) {
      setError("No se pudieron cargar las películas");
    } finally {
      setLoading(false);
    }
  };

  const search = async (value: string) => {
    try {
      setLoading(true);
      setError("");

      const text = value.trim();

      if (!text) {
        await loadMovies();
        return;
      }

      const result = /^\d{4}$/.test(text)
        ? await getYearMovie(Number(text))
        : await searchMovies(text);

      const moviesArray = Array.isArray(result)
        ? result.map(normalizeMovie)
        : [normalizeMovie(result)];

      setMovies(moviesArray);
    } catch {
      setError("No se encontraron resultados");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoLoad) {
      loadMovies();
    }
  }, [autoLoad]);

  return {
    movies,
    loading,
    error,
    loadMovies,
    search,
  };
}