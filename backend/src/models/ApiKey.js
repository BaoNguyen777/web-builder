import mongoose from "mongoose";

const apiKeySchema = new mongoose.Schema({
  storeId: mongoose.Schema.Types.ObjectId,
  apiKey: String,
  lastUsedAt: Date
}, { timestamps: true });

const ApiKey = mongoose.model("ApiKey", apiKeySchema);
export default ApiKey;