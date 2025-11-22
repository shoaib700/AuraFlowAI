import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export async function connectDB() {
  if (isConnected) {
    console.log("⚡ MongoDB already connected (frontend).");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is missing in .env.local");
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "aiBusiness",
    });

    isConnected = true;
    console.log("✅ MongoDB Connected (frontend)");
  } catch (err) {
    console.error("❌ MongoDB connection error (frontend):", err.message);
  }
}
