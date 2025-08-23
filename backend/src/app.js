import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.routes.js";
import verifyToken from "./middlewares/auth.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";

import templateRoutes from "./routes/template.routes.js";
import productRoutes from "./routes/product.routes.js";
import storeRoutes from "./routes/store.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/products",verifyToken, productRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/order", orderRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Web Builder API is running...");
});

// Error handler (luôn để cuối cùng)
app.use(errorMiddleware);

export default app;
