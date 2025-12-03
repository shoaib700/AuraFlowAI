import Link from 'next/link'
import AdStack from '../components/AdStack'

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-5xl font-bold mb-8">AI Business Autopilot</h1>
      <p className="text-xl mb-8">24/7 automated content & monetization</p>
      
      {/* ADS ON HOMEPAGE */}
      <AdStack type="header" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Link href="/posts" className="border rounded-lg p-6 hover:bg-gray-100">
          <h2 className="text-2xl font-semibold">📰 Blog Posts</h2>
          <p>AI-generated articles</p>
        </Link>
        <Link href="/dashboard" className="border rounded-lg p-6 hover:bg-gray-100">
          <h2 className="text-2xl font-semibold">📊 Dashboard</h2>
          <p>Live revenue stats</p>
        </Link>
      </div>
      
      {/* IN-ARTICLE ADS */}
      <AdStack type="inArticle" />
    </main>
  )
}