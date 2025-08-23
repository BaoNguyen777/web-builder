import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["admin", "customer"], default: "customer" },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
