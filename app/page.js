import AutopilotCard from "./components/AutopilotCard";

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">AuraFlow AI Dashboard</h1>
      <p className="text-gray-700">
        Your AI-powered automation engine is fully operational.
        All earnings modules and autopilot functions are active.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AutopilotCard
          title="Autopilot Engine"
          description="Runs automated tasks, growth, and traffic engine."
          endpoint="/api/autopilot"
        />
        <AutopilotCard
          title="Affiliate Engine"
          description="Monetizes Amazon, eBay, AliExpress, Temu links automatically."
          endpoint="/api/affiliate"
        />
        <AutopilotCard
          title="SEO Builder"
          description="Generates automatic SEO pages & traffic growth."
          endpoint="/api/seo"
        />
      </div>
    </div>
  );
}
