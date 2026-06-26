"use client";

import { useState } from "react";
import Header from "@/components/searchbar";
import { getYearMovie } from "@/service/movies/year_services";
import { searchMovies } from "@/service/movies/search_services";
import { Movies } from "@/src/models/movies";


export default function MoviesPage() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (value: string) => {
    try {
      setLoading(true);
      setError(null);

      const trimmedValue = value.trim();

      if (!trimmedValue) {
        setMovies([]);
        return;
      }

      let result;

      // 🔥 Si es año (solo números)
      if (/^\d{4}$/.test(trimmedValue)) {
        result = await getYearMovie(Number(trimmedValue));
      }
      // 🔥 Si es texto
      else {
        result = await searchMovies(trimmedValue);
      }


      const normalizeMovie = (movie: any): Movies => ({
        id: movie.id,
        title: movie.title,
        description: movie.description,
        duration: movie.duration,
        poster_url: movie.poster_url ?? "",
        release_year: movie.release_year ?? movie.year ?? 0,
        country_id: movie.country_id ?? 0,
        video_url: movie.video_url ?? "",
        created_at: new Date(movie.created_at ?? Date.now()),
      });

      const moviesArray: Movies[] = Array.isArray(result)
        ? result.map(normalizeMovie)
        : [normalizeMovie(result)];

      setMovies(moviesArray);
    } catch (err) {
      setError("No se pudieron obtener las películas");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} />

      {loading && <p className="mt-4">Cargando...</p>}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {!loading && !error && movies.length === 0 && (
        <p className="mt-4 text-gray-400">
          No hay resultados
        </p>
      )}

      <div className="mt-6">
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>{movie.release_year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}