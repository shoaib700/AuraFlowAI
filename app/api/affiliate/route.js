import { NextResponse } from "next/server";
import { runAffiliate } from "../../../autopilot-engine/affiliateEngine";

export async function GET() {
  const result = await runAffiliate();
  return NextResponse.json(result);
}
