"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [status, setStatus] = useState("");

  async function runAutopilot() {
    setStatus("Running...");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/autopilot/run`
      );

      const data = await res.json();
      setStatus(data.message || "Autopilot complete.");
    } catch (err) {
      setStatus("Error running autopilot.");
    }
  }

  return (
    <div>
      <h1>AuraFlow AI Dashboard</h1>

      <button onClick={runAutopilot}>Run Autopilot</button>

      <p>{status}</p>
    </div>
  );
}
