import '@/styles/globals.css';
import '@/styles/modern.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_ID) {
      const s1 = document.createElement("script");
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      s1.async = true;
      document.head.appendChild(s1);

      window.dataLayer = window.dataLayer || [];
      function gtag(){ window.dataLayer.push(arguments); }

      gtag("js", new Date());
      gtag("config", process.env.NEXT_PUBLIC_GA_ID);
    }
  }, []);

  return <Component {...pageProps} />;
}
