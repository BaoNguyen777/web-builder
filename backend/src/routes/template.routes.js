import express from "express";
import { getAllTemplates, getTemplateById } from "../controllers/template.controller.js";

const router = express.Router();

router.get("/", getAllTemplates);        // Lấy danh sách templates
router.get("/:id", getTemplateById);     // Lấy chi tiết 1 template

export default router;
