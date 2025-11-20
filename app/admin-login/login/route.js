import { NextResponse } from "next/server";

export async function POST(request) {
  const { user, pass } = await request.json();

  if (!process.env.ADMIN_USER || !process.env.ADMIN_PASS) {
    return NextResponse.json(
      { message: "Admin credentials are missing." },
      { status: 500 }
    );
  }

  if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS) {
    const res = NextResponse.json({ message: "Login successful" });
    res.cookies.set("admin_auth", "1", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 6
    });
    return res;
  }

  return NextResponse.json(
    { message: "Invalid username or password" },
    { status: 401 }
  );
}
