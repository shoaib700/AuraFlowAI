import AdSense from "@/components/AdSense";

export default async function BlogPage({ params }) {
  const { slug } = params;

  // Fetch blog from backend API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="p-10 text-red-500">
        Failed to load blog. Please try again later.
      </div>
    );
  }

  const blog = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-5">
      {/* Top Ad */}
      <AdSense />

      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Mid Ad */}
      <AdSense />

      {/* Blog Content */}
      <article
        className="prose prose-lg mt-6"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></article>

      {/* Bottom Ad */}
      <div className="mt-10">
        <AdSense />
      </div>
    </div>
  );
}
