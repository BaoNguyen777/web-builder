import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  storeId: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  images: [String],
  items: [
    {
      type: { type: String }, // "Áo", "Quần"
      name: String,
      link: String
    }
  ]
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;