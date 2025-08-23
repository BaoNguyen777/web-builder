import mongoose from "mongoose";


const templateSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  previewImage: String,
  ownerId: mongoose.Schema.Types.ObjectId,
  price: Number,
  repoUrl: String,
}, { timestamps: true });

const Template = mongoose.model("Template", templateSchema);

export default Template;