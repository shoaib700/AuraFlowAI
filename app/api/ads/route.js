import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    adsense_id: process.env.NEXT_PUBLIC_ADSENSE_ID,
  });
}
