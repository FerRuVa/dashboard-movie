import { Ratings } from '../models/ratings';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getRatings = async (): Promise<Ratings[]> =>{
    const rest = await fetch(`${API_URL}/ratings`);
    const data = await rest.json();
    return data;
};

