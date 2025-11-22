// app/seo/[slug]/page.js
import SEOPage from "@/models/SEOPage";
import db from "@/lib/db";

export default async function SEOPageDisplay({ params }) {
  await db.connect();
  const page = await SEOPage.findOne({ slug: params.slug });

  if (!page) return <div>SEO page not found</div>;

  return (
    <div style={{ padding: "25px" }}>
      <h1>{page.title}</h1>
      <p>{page.content}</p>

      {/* SEO Page Ad Block */}
      <div style={{ marginTop: "40px" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2203546185229559"
          data-ad-slot="7654321000"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({})</script>
      </div>
    </div>
  );
}
