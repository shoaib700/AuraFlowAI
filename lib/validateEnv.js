export function validateEnv() {
  const required = [
    "MONGODB_URI",
    "ADMIN_USER",
    "ADMIN_PASS"
  ];

  let missing = [];

  required.forEach((key) => {
    if (!process.env[key] || process.env[key].trim() === "") {
      missing.push(key);
    }
  });

  if (missing.length > 0) {
    console.warn(
      "⚠️ Missing environment variables:\n" +
        missing.map((m) => ` - ${m}`).join("\n")
    );
  } else {
    console.log("✅ Environment variables validated successfully.");
  }

  return missing.length === 0;
}
