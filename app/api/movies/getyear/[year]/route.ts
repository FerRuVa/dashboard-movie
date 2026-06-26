import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_BACKEND_URL;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ year: string }> }
) {
  try {
    const { year } = await params;

    const response = await fetch(
      `${API_URL}/movies/year/${year}`
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Error al obtener películas" },
        { status: response.status }
      );
    }

    const data = await response.json();

    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}