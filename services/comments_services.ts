import { Comments } from "@/src/models/comments";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getComments = async (): Promise<Comments[]> =>{
    const res = await fetch(`${API_URL}/comments`);
    const data = await res.json();
    return data;
};
