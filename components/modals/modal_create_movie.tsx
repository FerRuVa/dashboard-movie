"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useGenres } from "@/hooks/useGenres";
import { useCountries } from "@/hooks/useCountries";
import { Genres } from "@/src/models/genres";
import { Countries } from "@/src/models/countries";

import GenericComboboxProps from "../ui/comboboxprops";

interface MovieFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCreateMovie({
  isOpen,
  onClose,
}: MovieFormModalProps) {

  const { genres, loadingg, errorg } = useGenres();
  const { countries, loadingc, errorc } = useCountries();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const [selectedGenre, setSelectedGenre] = useState<Genres>();
  const [selectedCountries, setSelectedCountries] = useState<Countries>();

  if (!isOpen) return null;

  const handleSave = () => {

    console.log({
      title,
      description,
      duration,
      genre: selectedGenre,
    });

    // Aquí llamarás a tu servicio para guardar la película
  };

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        bg-black/60
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          bg-white
          rounded-2xl
          shadow-2xl
          w-full
          max-w-2xl
          p-8
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            rounded-full
            p-2
            hover:bg-gray-100
          "
        >
          <X size={22} />
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Agregar Película
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-3 border-gray-300 text-gray-900 placeholder:text-gray-600"
          />

          <textarea
            placeholder="Descripción"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg p-3 border-gray-300 text-gray-900 placeholder:text-gray-600"
          />

          <div className="flex gap-3">

            <input
              type="number"
              placeholder="Duración"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-1/2 border rounded-lg p-3 border-gray-300 text-gray-900 placeholder:text-gray-600"
            />

            <div className="w-1/2">

              <GenericComboboxProps
                items={genres}
                loading={loadingg}
                value={selectedGenre?.id}
                getValue={(g) => g.id}
                getLabel={(g) => g.genred}
                onChange={(g) => setSelectedGenre(g)}
              />

            </div>
            <div className="w-1/2">

              <GenericComboboxProps
                items={countries}
                loading={loadingc}
                value={selectedCountries?.id}
                getValue={(g) => g.id}
                getLabel={(g) => g.country}
                onChange={(g) => setSelectedCountries(g)}
              />

            </div>
          </div>

          {errorg && (
            <p className="text-red-500 text-sm">
              {errorg}
            </p>
          )}

          {errorc && (
            <p className="text-red-500 text-sm">
              {errorc}
            </p>
          )}

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600"
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            className="
              px-5
              py-2
              rounded-lg
              bg-blue-600
              text-white
              hover:bg-blue-700
            "
          >
            Guardar
          </button>

        </div>

      </div>
    </div>
  );
}