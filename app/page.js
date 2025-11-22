export default function Home() {
  return (
    <div>
      <h1>AuraFlow AI — Automatic Income Engine</h1>
      <p>
        Fully automated SEO, affiliate, and traffic generation system.
        Everything runs on its own.
      </p>

      <section>
        <h2>Autopilot Engine</h2>
        <p>Runs full automation: SEO + affiliate + pages.</p>
        <button
          onClick={() => fetch("/api/run")}
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Run Autopilot
        </button>
      </section>

      <hr />

      <section>
        <h2>Top Deals</h2>
        <p>Automatically updated Amazon, Temu, and eBay offers.</p>
        <a href="/deals/amazon">View Amazon Deals →</a>
      </section>

      <hr />

      <section>
        <h2>Trending Now</h2>
        <p>What people are searching today.</p>
        <a href="/trending">View Trending →</a>
      </section>

      <hr />

      <section>
        <h2>Latest Blog Posts</h2>
        <a href="/blog">View Blog →</a>
      </section>
    </div>
  );
}
