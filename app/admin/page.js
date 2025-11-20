"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load stats
  useEffect(() => {
    fetch("/api/stats")
      .then(res => res.json())
      .then(data => setStats(data.stats));
  }, []);

  // Load logs
  useEffect(() => {
    fetch("/api/logs")
      .then(res => res.json())
      .then(data => setLogs(data.logs));
  }, []);

  // Run autopilot
  async function runAutopilot() {
    setLoading(true);
    await fetch("/api/autopilot");
    setLoading(false);
    alert("Autopilot completed successfully!");
  }

  // Run affiliate engine
  async function runAffiliate() {
    setLoading(true);
    await fetch("/api/affiliate/run");
    setLoading(false);
    alert("Affiliate scan completed!");
  }

  // Run SEO engine
  async function runSEO() {
    setLoading(true);
    await fetch("/api/seo/run");
    setLoading(false);
    alert("SEO cycle completed!");
  }

  return (
    <div className="space-y-12 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">AuraFlow AI – Admin Dashboard</h1>

        <form action="/api/admin/logout" method="POST">
          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded shadow">
            Logout
          </button>
        </form>
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
          <h2 className="text-xl font-bold">Run Autopilot</h2>
          <p className="mt-2 text-gray-600">
            Runs SEO + Affiliate + Traffic engines automatically.
          </p>
          <button
            onClick={runAutopilot}
            disabled={loading}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            {loading ? "Running…" : "Start Autopilot"}
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
          <h2 className="text-xl font-bold">Affiliate Engine</h2>
          <p className="mt-2 text-gray-600">Create auto product pages.</p>
          <button
            onClick={runAffiliate}
            disabled={loading}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
          >
            {loading ? "Scanning…" : "Run Affiliate Scan"}
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
          <h2 className="text-xl font-bold">SEO Builder</h2>
          <p className="mt-2 text-gray-600">Generate auto SEO keyword pages.</p>
          <button
            onClick={runSEO}
            disabled={loading}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            {loading ? "Building…" : "Run SEO Cycle"}
          </button>
        </div>

      </div>

      {/* STATISTICS */}
      <div className="bg-white p-6 shadow rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Performance Overview</h2>

        {!stats && <p className="text-gray-600">Loading stats…</p>}

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="bg-gray-50 p-4 rounded-xl border text-center">
              <div className="text-sm text-gray-500">Today</div>
              <div className="text-3xl font-semibold">
                {stats.currency}{stats.today}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border text-center">
              <div className="text-sm text-gray-500">This Week</div>
              <div className="text-3xl font-semibold">
                {stats.currency}{stats.week}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border text-center">
              <div className="text-sm text-gray-500">This Month</div>
              <div className="text-3xl font-semibold">
                {stats.currency}{stats.month}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border text-center">
              <div className="text-sm text-gray-500">Traffic</div>
              <div className="text-lg font-semibold">
                {stats.traffic} visits<br />
                {stats.conversions} conversions<br />
                <span className="font-bold">{stats.convRate}%</span> CR
              </div>
            </div>

          </div>
        )}
      </div>

      {/* LOGS */}
      <div className="bg-white p-6 shadow rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">System Logs</h2>

        {logs.length === 0 && (
          <p className="text-gray-600">No logs available yet.</p>
        )}

        <ul className="space-y-3">
          {logs.map((log, i) => (
            <li key={i} className="bg-gray-50 p-3 rounded border">
              {log}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
