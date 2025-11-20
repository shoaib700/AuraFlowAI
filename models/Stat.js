import mongoose from "mongoose";

const StatSchema = new mongoose.Schema({
  date: String,
  earnings: Number,
  traffic: Number,
  conversions: Number
});

export default mongoose.models.Stat || mongoose.model("Stat", StatSchema);
