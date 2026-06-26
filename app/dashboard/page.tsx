"use client";

import { useEffect, useState } from "react";

import GenreChart from "@/components/genred_char";
import MovieCard from "@/components/movie_card";
import CardContent from "@/components/card_content";
import Carousel from "@/components/carrousel_content";

import { Movies } from "@/src/models/movies";
import { getMovies } from "@/service/movies/movies_services";

export default function DashboardPage() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [chartData, setChartData] = useState<
    { name: string; value: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  // 🔌 Fetch API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error al obtener películas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // 📊 Agrupar por año
  useEffect(() => {
    if (movies.length > 0) {
      const map = new Map<number, number>();

      movies.forEach((movie) => {
        if (!movie.release_year) return;

        const year = movie.release_year;
        map.set(year, (map.get(year) || 0) + 1);
      });

      const grouped = Array.from(map.entries())
        .map(([year, count]) => ({
          name: String(year),
          value: count,
        }))
        .sort((a, b) => Number(a.name) - Number(b.name))
        .slice(-12);

      setChartData(grouped);
    }
  }, [movies]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard de Películas
        </h1>
        <p className="text-gray-500">
          Panel administrativo de analytics y contenido
        </p>
      </div>

      {/* TOP SECTION */}
      <div className="grid grid-cols-12 gap-6">

        {/* CHART (8 cols) */}
        <div className="col-span-8 bg-white p-5 rounded-2xl shadow">
          {loading ? (
            <p className="text-gray-500">Cargando gráfico...</p>
          ) : (
            <GenreChart
              data={chartData}
              title="Películas por año"
            />
          )}
        </div>

        {/* SIDEBAR (4 cols) */}
        <div className="col-span-4 bg-white p-5 rounded-2xl shadow">
          <h2 className="font-semibold mb-4 text-lg text-black">
            Películas recientes
          </h2>

          {loading ? (
            <p className="text-gray-500">Cargando películas...</p>
          ) : (
            <Carousel
              items={movies.slice(0, 10)}
              itemWidth={130}
              speed={0.6}
              autoPlay={true}
              pauseOnHover={true}
              loop={true}
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

      {/* KPI SECTION */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <CardContent
          title="Total películas"
          value={movies.length.toString()}
        />

        <CardContent
          title="Año más activo"
          value={
            chartData.length
              ? chartData.reduce((a, b) =>
                  a.value > b.value ? a : b
                ).name
              : "N/A"
          }
        />

        <CardContent
          title="Promedio anual"
          value={
            chartData.length
              ? Math.round(
                  movies.length / chartData.length
                ).toString()
              : "0"
          }
        />
      </div>

    </div>
  );
}