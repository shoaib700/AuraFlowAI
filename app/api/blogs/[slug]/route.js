export async function GET(req, { params }) {
  try {
    const res = await fetch(
      `http://localhost:4000/api/content/blog/${params.slug}`
    );
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message });
  }
}
