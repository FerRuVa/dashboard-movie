import { Users } from "@/src/models/users";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getUsers = async (): Promise<Users[]> => {
  const res = await fetch(`${API_URL}/users`);
  const data = await res.json();

  return data;
};

export const createUser = async (user: Users) => {
  const res = await fetch(`${API_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  
  if (!res.ok) throw new Error("Error al crear película");

  return res.json();
};

