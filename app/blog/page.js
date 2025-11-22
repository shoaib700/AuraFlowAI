export default async function Blog() {
  const res = await fetch("http://localhost:4000/api/content/blog");
  const posts = await res.json();

  return (
    <div>
      <h1>Latest Blog Posts</h1>

      {/* Ad at top */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2203546185229559"
          data-ad-slot="5555555555"
          data-ad-format="auto"
          data-full-width-responsive="true">
        </ins>
        <script dangerouslySetInnerHTML={{ __html: `
          (adsbygoogle = window.adsbygoogle || []).push({});
        ` }}></script>
      </div>

      {posts.map((post, index) => (
        <div key={post.slug} style={{ marginBottom: "30px" }}>
          <h3>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </h3>
          <p>{post.summary}</p>

          {/* Insert ad after every 2 posts */}
          {(index + 1) % 2 === 0 && (
            <div style={{ textAlign: "center", margin: "30px 0" }}>
              <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-2203546185229559"
                data-ad-slot="6666666666"
                data-ad-format="auto"
                data-full-width-responsive="true">
              </ins>
              <script dangerouslySetInnerHTML={{ __html: `
                (adsbygoogle = window.adsbygoogle || []).push({});
              ` }}></script>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
