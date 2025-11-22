export const metadata = {
  title: "AuraFlow AI",
  description: "Automatic affiliate earnings and SEO engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Google AdSense Meta */}
        <meta name="google-adsense-account" content="ca-pub-2203546185229559" />

        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2203546185229559"
          crossOrigin="anonymous"
        ></script>

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${12780130986}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-${12780130986}');
            `,
          }}
        ></script>

      </head>

      <body style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
        <header
          style={{
            padding: "20px",
            background: "#111",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>AuraFlow AI</h2>
          <nav>
            <a href="/" style={{ marginRight: "15px", color: "#fff" }}>Home</a>
            <a href="/blog" style={{ marginRight: "15px", color: "#fff" }}>Blog</a>
            <a href="/deals/amazon" style={{ marginRight: "15px", color: "#fff" }}>Deals</a>
            <a href="/trending" style={{ marginRight: "15px", color: "#fff" }}>Trending</a>
            <a href="/admin" style={{ color: "#fff" }}>Admin</a>
          </nav>
        </header>

        {/* Global header ad */}
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <ins class="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2203546185229559"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
          <script>
            {(adsbygoogle = window.adsbygoogle || []).push({})}
          </script>
        </div>

        <main style={{ padding: "30px" }}>{children}</main>

        {/* Footer Ad */}
        <div style={{ margin: "40px 0", textAlign: "center" }}>
          <ins class="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2203546185229559"
            data-ad-slot="9876543210"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
          <script>
            {(adsbygoogle = window.adsbygoogle || []).push({})}
          </script>
        </div>

        <footer
          style={{
            marginTop: "50px",
            padding: "20px",
            background: "#f5f5f5",
            textAlign: "center",
          }}
        >
          <p>© {new Date().getFullYear()} AuraFlow AI</p>
        </footer>
      </body>
    </html>
  );
}
