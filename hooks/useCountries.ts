"use Client";

import { useEffect, useState } from "react";
import { Countries } from "@/src/models/countries";
import { getCountries } from "@/service/countries/countries_service";

export function useCountries(autoLoad = true) {
    const [countries, setCountries] = useState<Countries[]>([]);
    const [loadingc, setLoading] = useState(false);
    const [errorc, setError] = useState("");

    const normalizeCountries = (countries: any): Countries => ({
        id: countries.id,
        country: countries.country
    });

    const loadCountries = async () => {
        try {
            setLoading(true);
            setError("");

            const data = await getCountries();

            setCountries(data.map(normalizeCountries));

        } catch (e) {
            setError("No se pudieron cargar los paises");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (autoLoad) {
            loadCountries();
        }
    }, [autoLoad]);

    return {
        countries,
        loadingc,
        errorc,
    };
}