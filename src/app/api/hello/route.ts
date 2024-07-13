import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export default function GET(req: Request) {
  console.log("Olá");
  return NextResponse.json({ message: "Heloo World" });
}
