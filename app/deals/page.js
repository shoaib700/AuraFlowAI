// app/deals/page.js
export default function DealsPage() {
  return (
    <div style={{ padding: "25px" }}>
      <h1>Best Daily Deals</h1>
      <p>Top discounts automatically updated.</p>

      {/* Deals Ad */}
      <div style={{ marginTop: "30px" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2203546185229559"
          data-ad-slot="5555555555"
          data-ad-format="auto"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({})</script>
      </div>
    </div>
  );
}
