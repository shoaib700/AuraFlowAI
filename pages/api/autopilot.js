export default async function handler(req, res) {
  try {
    const body = JSON.parse(req.body || "{}");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/autopilot`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: "Autopilot API failed" });
  }
}
