import express from "express";
import { createProduct, getProducts, updateProduct, deleteProduct } from "../controllers/product.controller.js";
import verifyToken from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, createProduct);  // Thêm sản phẩm
router.get("/", verifyToken, getProducts);     // Lấy danh sách sản phẩm (có pagination)
router.put("/:id", verifyToken, updateProduct); // Cập nhật sản phẩm
router.delete("/:id", verifyToken, deleteProduct); // Xóa sản phẩm

export default router;
