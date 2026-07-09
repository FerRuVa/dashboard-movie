"use client";

import { useState } from "react";
import { Heart, Star } from "lucide-react";
import MovieModal from "./movie_modal";
import { Movies } from "@/src/models/movies";

interface Props {
  movie: Movies;
}

export default function MovieCardBig({ movie }: Props) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="
        bg-white
        rounded-3xl
        shadow-lg
        overflow-hidden
        cursor-pointer
        hover:shadow-2xl
        hover:scale-105
        transition-all
        duration-300
        w-[280px]
      "
      >
        <img
          src={movie.poster_url}
          alt={movie.title}
          className="w-full h-90 object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/150x220?text=No+Image";
          }}
        />

        <div className="p-5">

          <h2 className="text-xl font-bold line-clamp-1">
            {movie.title}
          </h2>

          <div className="flex justify-between items-center mt-5">

            <div className="flex items-center gap-2">

              <Star
                className="text-yellow-500 fill-yellow-500"
                size={18}
              />

              <span>{movie.duration}</span>

            </div>

            <button
              onClick={(e) => e.stopPropagation()}
              className="rounded-full border p-3 hover:bg-red-50"
            >
              <Heart className="text-red-500" />
            </button>

          </div>

        </div>
      </div>

      <MovieModal
        movie={movie}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      
    </>
  );
}