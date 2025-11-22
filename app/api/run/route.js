export async function GET() {
  try {
    const res = await fetch("http://localhost:4000/api/autopilot/run");
    const data = await res.json();

    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json({ success: false, error: err.message });
  }
}
