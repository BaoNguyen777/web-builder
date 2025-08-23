import mongoose from "mongoose";


const purchaseSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  templateId: mongoose.Schema.Types.ObjectId,
  status: { type: String, enum: ["active", "expired"], default: "active" },
  purchaseDate: { type: Date, default: Date.now }
});

const Purchase = mongoose.model("Purchase", purchaseSchema);
export default Purchase;