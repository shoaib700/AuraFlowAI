export default async function Trending() {
  const res = await fetch("http://localhost:4000/api/trending");
  const items = await res.json();

  return (
    <div>
      <h1>Trending Now</h1>

      {/* Top Ad */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2203546185229559"
          data-ad-slot="8080808080"
          data-ad-format="auto">
        </ins>
        <script dangerouslySetInnerHTML={{ __html: `
          (adsbygoogle = window.adsbygoogle || []).push({});
        ` }}></script>
      </div>

      {items.map((t, i) => (
        <div key={t.slug} style={{ marginBottom: "25px" }}>
          <a href={`/seo/${t.slug}`}>{t.title}</a>

          {/* Ads after every 4 items */}
          {(i + 1) % 4 === 0 && (
            <div style={{ textAlign: "center", margin: "25px 0" }}>
              <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-2203546185229559"
                data-ad-slot="9090909090"
                data-ad-format="auto">
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
