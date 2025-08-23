import express from "express";
import { createOrder, getOrders, getOrderById } from "../controllers/order.controller.js";
import verifyToken from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, createOrder);   // Tạo đơn hàng
router.get("/", verifyToken, getOrders);      // Lấy danh sách đơn hàng
router.get("/:id", verifyToken, getOrderById); // Lấy chi tiết đơn hàng

export default router;
