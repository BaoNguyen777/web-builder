import express from "express";
import { getTemplatesByCategory, getTemplateById, createTemplate, updateTemplate, deleteTemplate} from "../controllers/template.controller.js";
import { verifyToken, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Public /api/templates/category/lookbook
router.get("/", getTemplatesByCategory);        // Lấy danh sách templates, /api/templates?category=lookbook
router.get("/:id", getTemplateById);     // Lấy chi tiết 1 template

// Protected
router.post("/", verifyToken, isAdmin, createTemplate);
router.put("/:id", verifyToken, isAdmin, updateTemplate);
router.delete("/:id", verifyToken, isAdmin, deleteTemplate);

export default router;
