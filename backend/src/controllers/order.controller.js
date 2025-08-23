import Order from "../models/Order.js";

// Tạo order
export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice, storeId } = req.body;
    const order = new Order({
      customer: req.userId,
      store: storeId,
      items,
      totalPrice
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy danh sách order
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.userId }).populate("store");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy chi tiết order
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id, customer: req.userId }).populate("store");
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
