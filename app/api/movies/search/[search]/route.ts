import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_BACKEND_URL;

export async function GET(
  request: Request,
  { params }: { params: { search: string } }
) {
  try {
    const { search } = await params;

    const res = await fetch(`${API_URL}/movies/search/${search}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Error fetching movies" },
        { status: res.status }
      );
    }

    const data = await res.json();

    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}