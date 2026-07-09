"use client";

import { X, Star, Play } from "lucide-react";
import { Movies } from "@/src/models/movies";

interface MovieModalProps {
  movie: Movies | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MovieModal({
  movie,
  isOpen,
  onClose,
}: MovieModalProps) {
  if (!isOpen || !movie) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          bg-white
          rounded-3xl
          shadow-2xl
          overflow-hidden

          w-full
          md:w-[50vw]
          max-w-5xl

          h-auto
          max-h-[80vh]

          animate-[fadeIn_.25s_ease]
        "
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            z-20
            bg-white
            rounded-full
            p-2
            shadow-lg
            hover:bg-gray-100
            transition
          "
        >
          <X size={22} />
        </button>

        <div className="grid md:grid-cols-2 h-full">

          {/* Poster */}
          <div className="bg-black h-[350px] md:h-[70vh] max-h-[80vh]">
            <img
              src={movie.poster_url}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Información */}
          <div className="flex flex-col p-8 overflow-y-auto">

            <h1 className="text-3xl font-bold">
              {movie.title}
            </h1>

            <div className="flex flex-wrap gap-3 mt-5">

              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                {movie.country_id}
              </span>

              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {movie.country_id}
              </span>

              <span className="bg-yellow-400 px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                <Star size={15} fill="currentColor" />
                {movie.country_id}
              </span>

            </div>

            <p className="mt-6 text-gray-700 leading-7">
              {movie.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div>
                <p className="text-sm text-gray-500 font-semibold">
                  Director
                </p>

                <p>{movie.country_id}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 font-semibold">
                  Duración
                </p>

                <p>{movie.duration} min</p>
              </div>

            </div>

            <a
              href={movie.video_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button
                className="
                  mt-8
                  w-full
                  bg-red-600
                  hover:bg-red-700
                  transition
                  text-white
                  rounded-xl
                  py-4
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <Play size={20} />
                Ver Trailer
              </button>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}