import express from "express";
import { createStore, getStore, updateStore } from "../controllers/store.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, createStore);    // Tạo store
router.get("/:id", getStore);                  // Lấy thông tin store
router.put("/:id", verifyToken, updateStore);  // Update store (tên web, màu sắc, logo)

export default router;
