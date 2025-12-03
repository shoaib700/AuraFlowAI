import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Business Autopilot',
  description: '24/7 automated content & monetization engine',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* FORCE ADSENSE TO APPEAR IN SOURCE */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2203546185229559" crossOrigin="anonymous"></script>
        <script dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-2203546185229559",
            enable_page_level_ads: true
          });`
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}