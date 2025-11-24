import Layout from "@/components/Layout";
import { useState } from "react";

export default function SEOPage() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  async function generate() {
    const res = await fetch("/api/seo", {
      method: "POST",
      body: JSON.stringify({ keyword }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <Layout>
      <h1 className="pageTitle">🔍 SEO Tools Suite</h1>

      <div className="inputCard">
        <input
          type="text"
          className="input"
          placeholder="Enter keyword input..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button className="primaryBtn" onClick={generate}>
          Generate SEO Data
        </button>
      </div>

      {result && (
        <div className="outputCard">
          <h3>Suggested Title:</h3>
          <p>{result.title}</p>

          <h3>Meta Description:</h3>
          <p>{result.description}</p>

          <h3>Keywords:</h3>
          <p>{result.keywords}</p>
        </div>
      )}
    </Layout>
  );
}
