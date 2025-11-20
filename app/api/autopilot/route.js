import { NextResponse } from "next/server";
import { getBaseUrl } from "@/lib/getBaseUrl";

export async function GET() {
  const base = getBaseUrl();

  await fetch(base + "/api/affiliate/run");
  await fetch(base + "/api/seo/run");

  return NextResponse.json({
    success: true,
    message: "Autopilot completed"
  });
}
