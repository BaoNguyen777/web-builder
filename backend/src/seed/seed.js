// seed.js
import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js";
import User from "../models/User.js";
import Store from "../models/Store.js";
import Product from "../models/Product.js";
import Template from "../models/Template.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

async function seed() {
  try {
    // Kết nối DB
    await connectDB();

    // Xóa data cũ
    await User.deleteMany({});
    await Store.deleteMany({});
    await Product.deleteMany({});
    await Template.deleteMany({}); 

    // Tạo user test
    const hashedPassword = await bcrypt.hash("123456", 10);
    const user = await User.create({
      email: "test@example.com",
      password: hashedPassword,
      role: "customer", // user bình thường
    });

    // Tạo templates mẫu
    const templates = [
      {
        category: "lookbook",
        name: "Lookbook Nam Basic",
        description: "Template lookbook trưng bày outfit nam phong cách tối giản.",
        previewImage: "https://via.placeholder.com/400x300?text=Lookbook+Nam+Basic",
        price: 10,
        repoUrl: "https://github.com/your-org/lookbook-nam-basic",
        ownerId: user._id, // 👈 gắn user test
      },
      {
        category: "lookbook",
        name: "Lookbook Nữ Streetwear",
        description: "Template lookbook outfit nữ phong cách đường phố.",
        previewImage: "https://via.placeholder.com/400x300?text=Lookbook+Nu+Streetwear",
        price: 15,
        repoUrl: "https://github.com/your-org/lookbook-nu-streetwear",
        ownerId: user._id,
      },
      {
        category: "portfolio",
        name: "Portfolio Creative",
        description: "Template portfolio cho designer sáng tạo.",
        previewImage: "https://via.placeholder.com/400x300?text=Portfolio+Creative",
        price: 20,
        repoUrl: "https://github.com/your-org/portfolio-creative",
        ownerId: user._id,
      },
    ];

    await Template.insertMany(templates);

    console.log("🌱 Seed dữ liệu thành công!");
    console.log("👤 User test:", user.email, "id:", user._id);
    console.log("📦 Templates:", templates.map(t => t.name));
  } catch (err) {
    console.error("❌ Lỗi seed:", err);
  } finally {
    // Ngắt kết nối
    await mongoose.disconnect();
    process.exit();
  }
}

seed();
