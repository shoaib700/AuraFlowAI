export async function GET() {
  try {
    const backend = process.env.NEXT_PUBLIC_AUTOPILOT_API_URL;

    const res = await fetch(`${backend}/api/autopilot/run`);
    const data = await res.json();

    return Response.json({
      success: true,
      backendResponse: data,
    });

  } catch (err) {
    return Response.json({
      success: false,
      error: err.message,
    });
  }
}
