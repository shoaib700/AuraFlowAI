export default function getBaseUrl() {
  // Browser (client)
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  // Server (Vercel)
  if (process.env.PROD_BASE_URL) {
    return process.env.PROD_BASE_URL;
  }

  // Fallback
  return "http://localhost:3000";
}
