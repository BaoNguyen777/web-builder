import mongoose from "mongoose";


const storeSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  templateId: mongoose.Schema.Types.ObjectId,
  storeName: String,
  customDomain: String,
  logo: String,
  theme: {
    primaryColor: String,
    secondaryColor: String
  }
}, { timestamps: true });

const Store = mongoose.model("Store", storeSchema);
export default Store;
