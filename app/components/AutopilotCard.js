"use client";
import axios from "axios";
import { useState } from "react";

export default function AutopilotCard({ title, description, endpoint }) {
  const [result, setResult] = useState("");

  const runProcess = async () => {
    setResult("Running...");
    const res = await axios.get(endpoint);
    setResult(res.data.message);
  };

  return (
    <div className="bg-white shadow p-6 rounded">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>

      <button 
        onClick={runProcess}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Run
      </button>

      {result && (
        <div className="mt-4 p-3 bg-gray-100 rounded text-gray-800">
          {result}
        </div>
      )}
    </div>
  );
}
