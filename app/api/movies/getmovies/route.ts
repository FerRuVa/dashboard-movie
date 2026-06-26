import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_BACKEND_URL;

export async function GET() {
  try {
    const response = await fetch(`${API_URL}/movies`);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Error al obtener películas" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}