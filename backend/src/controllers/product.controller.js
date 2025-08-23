import Product from "../models/Product.js";

// Thêm sản phẩm
export const createProduct = async (req, res) => {
  try {
    const { name, image, category, links } = req.body;
    const newProduct = new Product({
      name,
      image,
      category,
      links,
      owner: req.userId
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy sản phẩm (có pagination)
export const getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const products = await Product.find({ owner: req.userId })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const total = await Product.countDocuments({ owner: req.userId });
    res.json({ products, total });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findOneAndUpdate(
      { _id: req.params.id, owner: req.userId },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({ _id: req.params.id, owner: req.userId });
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
