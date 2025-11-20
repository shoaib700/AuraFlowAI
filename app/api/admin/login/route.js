import { NextResponse } from "next/server";

export async function POST(req) {
  const { user, pass } = await req.json();

  if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS) {
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_auth", "1", {
      httpOnly: true,
      maxAge: 60 * 60 * 6,
      path: "/",
    });
    return res;
  }

  return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}
