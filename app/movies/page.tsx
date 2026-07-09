"use client";

import { useState } from "react";

import Header from "@/components/searchbar";
import { useMovies } from "@/hooks/useMovies";
import MovieCardBig from "@/components/cardbig/movie_card_big";
import { Plus } from "lucide-react";
import ModalCreateMovie from "@/components/modals/modal_create_movie";



export default function MoviesPage() {

  const {
    movies,
    loading,
    error,
    search,
  } = useMovies();

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header fijo */}
      <div className="sticky top-0 z-30 bg-gray-50 px-6 py-4">
        <Header onSearch={search} />
      </div>

      {/* Contenido */}
      <div className="p-6">
        {loading && (
          <p className="text-gray-600">
            Cargando...
          </p>
        )}

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="grid grid-cols-4 gap-8">
            {movies.map((movie) => (
              <MovieCardBig
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        )}

        <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6 pb-10">
          {movies.map((movie) => (
            <MovieCardBig
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => setOpenModal(true)}
        className="
    fixed
    bottom-8
    right-8
    z-50
    bg-blue-100
    text-blue-600
    rounded-full
    w-16
    h-16
    shadow-2xl
    hover:bg-blue-200
    hover:scale-110
    transition-all
    duration-300
    flex
    items-center
    justify-center
  "
      >
        <Plus size={30} />
      </button>

      <ModalCreateMovie
        isOpen={openModal}
        onClose={() => setOpenModal(false)}

      />
    </div>
  );
}