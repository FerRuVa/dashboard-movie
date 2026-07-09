import { Countries } from "@/src/models/countries";

export const getCountries = async (): Promise<Countries[]> => {
    const res = await fetch("/api/countries/getcountries");

    if (!res.ok) {
        throw new Error("Error al obtener géneros");
    }

    const data = await res.json();

    return data;
};