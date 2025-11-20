import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    stats: {
      today: 4.40,
      week: 19.25,
      month: 88.90,
      traffic: 1520,
      conversions: 29,
      convRate: 1.8,
      currency: "$"
    }
  });
}
