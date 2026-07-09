"use client";

import { useEffect, useState } from "react";
import { Genres } from "@/src/models/genres";
import { getGenres } from "@/service/genres/genres_services";

export function useGenres(autoLoad = true) {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [loadingg, setLoading] = useState(false);
    const [errorg, setError] = useState("");

    const normalizeGenres = (genre: any): Genres => ({
        id: genre.id,
        genred: genre.gender
    });

    const loadGenres = async () => {
        try {
            setLoading(true);
            setError("");

            const data = await getGenres();

            setGenres(data.map(normalizeGenres));

        } catch (e) {
            setError("No se pudieron cargar los generos");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (autoLoad) {
            loadGenres();
        }
    }, [autoLoad]);

    return {
        genres,
        loadingg,
        errorg,
    };
}