import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_BACKEND_URL;

export async function POST(request: Request) {
  try {
    const movie = await request.json();

    const res = await fetch(`${API_URL}/movies/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Error al crear película" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}