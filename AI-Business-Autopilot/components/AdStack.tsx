'use client'

export default function AdStack() {
  return (
    <div className="ad-stack my-8 p-4 border rounded bg-gray-50">
      {/* ADSENSE AUTO ADS */}
      <ins className="adsbygoogle block"
           data-ad-client="ca-pub-2203546185229559"
           data-ad-slot="1234567890"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      
      {/* AMAZON NATIVE ADS */}
      <div id="amzn-assoc-ad-12345678-1234-1234-1234-123456789012" className="mt-4"></div>
      <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=12345678-1234-1234-1234-123456789012"></script>
      
      {/* EZOIC PLACEHOLDER */}
      <div id="ezoic-pub-ad-placeholder-101" className="mt-4"></div>
    </div>
  )
}