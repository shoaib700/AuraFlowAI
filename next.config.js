/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "127.0.0.1"],
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    NEXT_PUBLIC_ADSENSE_ID: process.env.NEXT_PUBLIC_ADSENSE_ID,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    MONGODB_URI: process.env.MONGODB_URI,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    AUTOPILOT_SECRET_KEY: process.env.AUTOPILOT_SECRET_KEY,
    ADMIN_LOGIN_TOKEN: process.env.ADMIN_LOGIN_TOKEN,
  },
};

module.exports = nextConfig;
