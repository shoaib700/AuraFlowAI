export async function GET() {
  try {
    const backendURL = process.env.NEXT_PUBLIC_AUTOPILOT_API_URL;

    const response = await fetch(`${backendURL}/api/autopilot/run`);
    const data = await response.json();

    return Response.json({
      success: true,
      backend: data
    });

  } catch (err) {
    return Response.json({
      success: false,
      error: err.message
    }, { status: 500 });
  }
}
