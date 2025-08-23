// app/api/templates/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:8080/templates", {
    cache: "no-store",
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Không thể fetch backend" }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
