import Layout from "@/components/Layout";
import { useState } from "react";

export default function AutoPilot() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  async function generate() {
    const res = await fetch("/api/autopilot", {
      method: "POST",
      body: JSON.stringify({ query: input }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    setReply(data.response || "No output");
  }

  return (
    <Layout>
      <h1 className="pageTitle">🤖 AuraFlow Autopilot AI</h1>

      <div className="inputCard">
        <textarea
          className="textarea"
          placeholder="Type your task or automation request..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="primaryBtn" onClick={generate}>
          Run Autopilot
        </button>
      </div>

      {reply && <div className="outputCard">{reply}</div>}
    </Layout>
  );
}
