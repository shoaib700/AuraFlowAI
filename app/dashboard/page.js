import DashboardStats from "../components/DashboardStats";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">System Analytics</h1>

      <DashboardStats />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-bold">Traffic</h2>
          <p className="text-gray-700 mt-2">
            Autopilot engine increasing traffic automatically...
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-bold">Affiliate Earnings</h2>
          <p className="text-gray-700 mt-2">
            Auto-optimized links generating revenue...
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-bold">SEO Pages</h2>
          <p className="text-gray-700 mt-2">
            SEO builder creating high-rank pages...
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl font-bold">System Health</h2>
          <p className="text-gray-700 mt-2">
            All systems running smoothly.
          </p>
        </div>
      </div>
    </div>
  );
}
