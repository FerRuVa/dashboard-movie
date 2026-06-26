import { Favorites } from "@/src/models/favorites";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getFavorites = async (): Promise<Favorites[]> => {
    const res = await fetch(`${API_URL}/favorites`);
    const data = await res.json();
    return data;
};
