import AdSense from "@/components/AdSense";

export default async function SEOPage({ params }) {
  const { slug } = params;

  // Fetch SEO page data from backend API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/seo/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="p-10 text-red-500">
        Failed to load SEO Page. Please try again later.
      </div>
    );
  }

  const page = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-5">
      
      {/* Top Ad */}
      <AdSense />

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-4">{page.title}</h1>

      {/* Description or subtitle */}
      {page.description && (
        <p className="text-gray-600 mb-6">{page.description}</p>
      )}

      {/* Mid Ad */}
      <AdSense />

      {/* Main SEO content */}
      <article
        className="prose prose-lg mt-6"
        dangerouslySetInnerHTML={{ __html: page.content }}
      ></article>

      {/* Bottom Ad */}
      <div className="mt-10">
        <AdSense />
      </div>
    </div>
  );
}
