// app/layout.js
"use client";

import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "AuraFlow AI",
  description: "Automated business autopilot engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2203546185229559"
          crossOrigin="anonymous"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
