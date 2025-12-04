export default function Dashboard() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8"> Revenue Dashboard</h1>
      
      <div className="border rounded-lg p-4 mb-8 h-96">
        <h2 className="text-2xl font-semibold mb-4">AdSense Earnings</h2>
        <iframe src="https://www.google.com/adsense" className="w-full h-full" />
      </div>
      
      <div className="border rounded-lg p-4 h-96">
        <h2 className="text-2xl font-semibold mb-4">Amazon Associates</h2>
        <iframe src="https://affiliate-program.amazon.com" className="w-full h-full" />
      </div>
    </main>
  )
}
