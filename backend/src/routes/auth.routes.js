import { Router } from "express";
import { register, login, getProfile } from "../controllers/auth.controller.js";
import verifyToken from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);   // Đăng ký
router.post("/login", login);         // Đăng nhập
router.get("/me", verifyToken, getProfile); // Lấy thông tin user

export default router;
