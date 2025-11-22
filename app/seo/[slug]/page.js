export default async function SEOPage({ params }) {
  const res = await fetch(`http://localhost:4000/api/seo/${params.slug}`);
  const page = await res.json();

  return (
    <div>
      <h1>{page.title}</h1>

      {/* Ad under title */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2203546185229559"
          data-ad-slot="4444444444"
          data-ad-format="auto"
          data-full-width-responsive="true">
        </ins>
        <script dangerouslySetInnerHTML={{ __html: `
          (adsbygoogle = window.adsbygoogle || []).push({});
        ` }}></script>
      </div>

      {/* Content with ads every 3rd paragraph */}
      <div>
        {page.content.split("</p>").map((chunk, i) => (
          <div key={i}>
            <p dangerouslySetInnerHTML={{ __html: chunk }} />

            {(i + 1) % 3 === 0 && (
              <div style={{ textAlign: "center", margin: "25px 0" }}>
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
            )}
          </div>
        ))}
      </div>

      {/* Final Ad */}
      <div style={{ textAlign: "center", margin: "40px 0" }}>
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
    </div>
  );
}
