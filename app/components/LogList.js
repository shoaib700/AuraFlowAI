"use client";
import { useEffect, useState } from "react";

export default function LogList() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("/api/logs")
      .then(res => res.json())
      .then(data => setLogs(data.logs));
  }, []);

  return (
    <ul className="space-y-2 text-gray-700">
      {logs.map((log, i) => (
        <li key={i} className="bg-gray-100 p-2 rounded">
          {log}
        </li>
      ))}
    </ul>
  );
}
