import { Contries } from "@/src/models/countries";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCountries = async (): Promise<Contries[]> => {
    const res = await fetch(`${API_URL}/countries`);
    const data = await res.json();
    return data;
};