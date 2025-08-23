import Store from "../models/Store.js";

// Tạo store
export const createStore = async (req, res) => {
  try {
    const { name, logo, primaryColor } = req.body;
    const store = new Store({ owner: req.userId, name, logo, primaryColor });
    await store.save();
    res.status(201).json(store);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy store
export const getStore = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id).populate("owner", "email name");
    if (!store) return res.status(404).json({ message: "Store not found" });
    res.json(store);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update store
export const updateStore = async (req, res) => {
  try {
    const updated = await Store.findOneAndUpdate(
      { _id: req.params.id, owner: req.userId },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Store not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
