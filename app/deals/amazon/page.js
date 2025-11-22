export default async function AmazonDeals() {
  const res = await fetch("http://localhost:4000/api/deals/amazon");
  const items = await res.json();

  return (
    <div>
      <h1>Amazon Deals</h1>

      {/* Top Ad */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2203546185229559"
          data-ad-slot="1010101010"
          data-ad-format="auto">
        </ins>
        <script dangerouslySetInnerHTML={{ __html: `
          (adsbygoogle = window.adsbygoogle || []).push({});
        ` }}></script>
      </div>

      {items.map((item, i) => (
        <div key={item.url} style={{ marginBottom: "25px" }}>
          <a href={item.url} target="_blank">
            {item.title}
          </a>

          {(i + 1) % 3 === 0 && (
            <div style={{ textAlign: "center", margin: "25px 0" }}>
              <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-2203546185229559"
                data-ad-slot="2020202020"
                data-ad-format="auto">
              </ins>
              <script dangerouslySetInnerHTML={{ __html: `
                (adsbygoogle = window.adsbygoogle || []).push({});
              ` }}></script>
            </div>
          )}
        </div>
      ))}

      {/* Footer ad */}
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2203546185229559"
          data-ad-slot="3030303030"
          data-ad-format="auto">
        </ins>
        <script dangerouslySetInnerHTML={{ __html: `
          (adsbygoogle = window.adsbygoogle || []).push({});
        ` }}></script>
      </div>
    </div>
  );
}
