import mongoose from "mongoose";


const templateSchema = new mongoose.Schema({
  id: String,
  category: String,
  name: String,
  description: String,
  previewImage: String,
  price: Number,
  ownerId: mongoose.Schema.Types.ObjectId,
  repoUrl: String,
}, { timestamps: true });

const Template = mongoose.model("Template", templateSchema);

export default Template;