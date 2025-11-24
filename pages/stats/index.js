import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

export default function Stats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/stats");
      const data = await res.json();
      setStats(data);
    }
    load();
  }, []);

  return (
    <Layout>
      <h1 className="pageTitle">📊 Analytics Dashboard</h1>

      {stats ? (
        <div className="statsGrid">
          <div className="statCard">
            <h3>Total Visitors</h3>
            <p>{stats.visitors}</p>
          </div>

          <div className="statCard">
            <h3>Pages Created</h3>
            <p>{stats.pages}</p>
          </div>

          <div className="statCard">
            <h3>Deals Clicked</h3>
            <p>{stats.deals}</p>
          </div>
        </div>
      ) : (
        <p>Loading stats...</p>
      )}
    </Layout>
  );
}
