export default function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return process.env.PROD_BASE_URL || "https://aura-flow-ai.vercel.app";
}
