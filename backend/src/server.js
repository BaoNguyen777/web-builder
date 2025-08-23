import "./env.js";

import app from "./app.js";
import connectDB from "./config/db.js";


// Kết nối DB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

console.log("In server.js JWT_SECRET env:", process.env.JWT_SECRET);