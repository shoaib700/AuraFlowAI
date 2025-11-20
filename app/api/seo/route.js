import { NextResponse } from "next/server";
import { runSEO } from "../../../autopilot-engine/seoEngine";

export async function GET() {
  const result = await runSEO();
  return NextResponse.json(result);
}
