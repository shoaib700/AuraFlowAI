import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Log || mongoose.model("Log", LogSchema);
