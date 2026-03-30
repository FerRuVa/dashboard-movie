import { Genres } from './../src/models/genres';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getGenres = async (): Promise<Genres[]> =>{
    const res = await fetch(`${API_URL}/genres`);
    const data = await res.json();

    return data;
};