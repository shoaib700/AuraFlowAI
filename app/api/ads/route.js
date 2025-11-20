import { NextResponse } from "next/server";
import { runAds } from "../../../autopilot-engine/adsEngine";

export async function GET() {
  const result = await runAds();
  return NextResponse.json(result);
}
