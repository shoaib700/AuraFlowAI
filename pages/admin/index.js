import Layout from "@/components/Layout";
import { useState } from "react";

export default function Admin() {
  const [token, setToken] = useState("");
  const [output, setOutput] = useState("");

  async function verify() {
    const res = await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: { "Content-Type": "application/json" }
    });

    const data = await res.json();
    setOutput(data.message);
  }

  return (
    <Layout>
      <h1 className="pageTitle">🔐 Admin Panel</h1>

      <div className="inputCard">
        <input
          className="input"
          type="password"
          placeholder="Enter Admin Token..."
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />

        <button className="primaryBtn" onClick={verify}>
          Authenticate
        </button>
      </div>

      {output && <div className="outputCard">{output}</div>}
    </Layout>
  );
}
