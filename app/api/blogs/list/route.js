export async function GET() {
  try {
    const res = await fetch("http://localhost:4000/api/content/blog");
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message });
  }
}
