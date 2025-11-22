// app/blog/[slug]/page.js
import React from "react";
import db from "@/lib/db";
import Blog from "@/models/Blog";

export default async function BlogPage({ params }) {
  await db.connect();
  const post = await Blog.findOne({ slug: params.slug });

  if (!post) {
    return <div>Blog not found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      {/* Ad 1 - Banner */}
      <div style={{ margin: "30px 0" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2203546185229559"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({})</script>
      </div>

      {/* Ad 2 - Rectangle */}
      <div style={{ marginTop: "50px" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2203546185229559"
          data-ad-slot="9876543210"
          data-ad-format="auto"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({})</script>
      </div>
    </div>
  );
}
