// seed.js
import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js";
import User from "../models/User.js";
import Store from "../models/Store.js";
import Product from "../models/Product.js";
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

    // Tạo user test
    const hashedPassword = await bcrypt.hash("123456", 10);
    const user = await User.create({
      email: "test@example.com",
      password: hashedPassword,
      role: "customer", // user bình thường
    });

    // Tạo store test
    const store = await Store.create({
      name: "Lookbook Demo",
      owner: user._id,
      template: "lookbook",
      slug: "lookbook-demo",
    });

    // Tạo sản phẩm test
    await Product.insertMany([
      {
        storeId: store._id,
        name: "Outfit Nam 1",
        category: "men",
        image: "https://via.placeholder.com/300",
        items: [
          { type: "Áo", link: "https://shopee.vn/ao-nam" },
          { type: "Quần", link: "https://shopee.vn/quan-nam" },
        ],
      },
      {
        storeId: store._id,
        name: "Outfit Nữ 1",
        category: "women",
        image: "https://via.placeholder.com/300",
        items: [
          { type: "Áo", link: "https://shopee.vn/ao-nu" },
          { type: "Váy", link: "https://shopee.vn/vay-nu" },
        ],
      },
    ]);

    console.log("🌱 Seed dữ liệu thành công!");
  } catch (err) {
    console.error("❌ Lỗi seed:", err);
  } finally {
    // Ngắt kết nối
    await mongoose.disconnect();
    process.exit();
  }
}

seed();
