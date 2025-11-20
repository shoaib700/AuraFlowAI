import { NextResponse } from "next/server";
import { createSEOPage } from "@/lib/createSEOPage";

export async function GET() {
  const keywords = [
    "best gadgets 2025",
    "top deals",
    "amazon trending products"
  ];

  const pages = [];
  for (const kw of keywords) {
    const url = await createSEOPage(kw);
    pages.push(url);
  }

  return NextResponse.json({
    success: true,
    message: "SEO pages created",
    pages
  });
}
