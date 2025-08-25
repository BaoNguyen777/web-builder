import Template from "../models/Template.js";

// GET all templates (filter by category optional)
export const getTemplatesByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const templates = await Template.find(query);
    res.json(templates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET template by ID
export const getTemplateById = async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    if (!template) return res.status(404).json({ message: "Template not found" });
    res.json(template);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE template (admin only)
export const createTemplate = async (req, res) => {
  try {
    const { id, category, name, description, previewImage, price, ownerId, repoUrl } = req.body;

    const newTemplate = new Template({
      id,
      category,
      name,
      description,
      previewImage,
      price,
      ownerId,
      repoUrl,
    });

    const saved = await newTemplate.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE template (admin only)
export const updateTemplate = async (req, res) => {
  try {
    const template = await Template.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!template) return res.status(404).json({ message: "Template not found" });
    res.json(template);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE template (admin only)
export const deleteTemplate = async (req, res) => {
  try {
    const template = await Template.findByIdAndDelete(req.params.id);
    if (!template) return res.status(404).json({ message: "Template not found" });
    res.json({ message: "Template deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
