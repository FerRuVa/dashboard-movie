"use client";

import { useEffect, useMemo } from "react";

import GenreChart from "@/components/genred_char";
import MovieCard from "@/components/carrousel/movie_card";
import CardContent from "@/components/card_content";
import Carousel from "@/components/carrousel/carrousel_content";
import { useMovies } from "@/hooks/useMovies";

export default function DashboardPage() {

  const { movies, loading } = useMovies();

  const chartData = useMemo(() => {

    const map = new Map<number, number>();

    movies.forEach((movie) => {
      if (!movie.release_year) return;

      map.set(
        movie.release_year,
        (map.get(movie.release_year) || 0) + 1
      );
    });

    return Array.from(map.entries())
      .map(([year, total]) => ({
        name: year.toString(),
        value: total,
      }))
      .sort((a, b) => Number(a.name) - Number(b.name))
      .slice(-12);

  }, [movies]);

  const mostActiveYear = useMemo(() => {
    if (!chartData.length) return "N/A";

    return chartData.reduce((a, b) =>
      a.value > b.value ? a : b
    ).name;

  }, [chartData]);

  const averagePerYear = useMemo(() => {

    if (!chartData.length) return "0";

    return Math.round(
      movies.length / chartData.length
    ).toString();

  }, [movies, chartData]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard de Películas
        </h1>

        <p className="text-gray-500">
          Panel administrativo de analytics y contenido
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-8 bg-white rounded-2xl shadow p-5">

          {loading ? (
            <p>Cargando gráfico...</p>
          ) : (
            <GenreChart
              data={chartData}
              title="Películas por año"
            />
          )}

        </div>

        <div className="col-span-4 bg-white rounded-2xl shadow p-5">

          <h2 className="font-semibold text-lg mb-4 text-black">
            Películas recientes
          </h2>

          {loading ? (
            <p>Cargando...</p>
          ) : (
            <Carousel
              items={movies.slice(0, 10)}
              itemWidth={130}
              speed={0.6}
              autoPlay
              pauseOnHover
              loop
              renderItem={(movie) => (
                <MovieCard
                  title={movie.title}
                  posterUrl={movie.poster_url}
                />
              )}
            />
          )}

        </div>

      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">

        <CardContent
          title="Total películas"
          value={movies.length.toString()}
        />

        <CardContent
          title="Año más activo"
          value={mostActiveYear}
        />

        <CardContent
          title="Promedio anual"
          value={averagePerYear}
        />

      </div>

    </div>
  );
}