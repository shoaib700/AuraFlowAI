export function getBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    return process.env.DEV_BASE_URL;
  }
  return process.env.PROD_BASE_URL;
}
