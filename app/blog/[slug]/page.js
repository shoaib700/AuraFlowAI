export default async function BlogPost({ params }) {
  const res = await fetch(
    `http://localhost:4000/api/content/blog/${params.slug}`
  );
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>

      {/* Ad Under Title */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2203546185229559"
          data-ad-slot="7777777777"
          data-ad-format="auto"
          data-full-width-responsive="true">
        </ins>
        <script dangerouslySetInnerHTML={{ __html: `
          (adsbygoogle = window.adsbygoogle || []).push({});
        ` }}></script>
      </div>

      <p style={{ opacity: 0.7 }}>{post.date}</p>

      {/* Content with ads inserted every 3rd paragraph */}
      <div>
        {post.content.split("</p>").map((chunk, i) => (
          <div key={i}>
            <p dangerouslySetInnerHTML={{ __html: chunk }} />

            {/* Insert ad after every 3 paragraphs */}
            {(i + 1) % 3 === 0 && (
              <div style={{ textAlign: "center", margin: "25px 0" }}>
                <ins className="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-2203546185229559"
                  data-ad-slot="8888888888"
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

      {/* Final Ad Block */}
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2203546185229559"
          data-ad-slot="9999999999"
          data-ad-format="auto"
          data-full-width-responsive="true">
        </ins>
        <script dangerouslySetInnerHTML={{ __html: `
          (adsbygoogle = window.adsbygoogle || []).push({});
        ` }}></script>
      </div>
    </div>
  );
}
