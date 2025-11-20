"use client";

import { useEffect, useState } from "react";

export default function DashboardStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/stats");
        const data = await res.json();
        setStats(data.stats);
      } catch (err) {
        console.error("Stats load error", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading performance metrics...</p>;
  }

  if (!stats) {
    return <p className="text-gray-500">No stats available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

      <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
        <div className="text-sm text-gray-500">Today</div>
        <div className="text-2xl font-bold">{stats.currency} {stats.today}</div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
        <div className="text-sm text-gray-500">This Week</div>
        <div className="text-2xl font-bold">{stats.currency} {stats.week}</div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
        <div className="text-sm text-gray-500">This Month</div>
        <div className="text-2xl font-bold">{stats.currency} {stats.month}</div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
        <div className="text-sm text-gray-500">Traffic / Conversion</div>
        <div className="text-gray-800">
          {stats.traffic} visits<br />
          {stats.conversions} sales<br />
          <span className="font-bold">{stats.convRate}% CR</span>
        </div>
      </div>

    </div>
  );
}
