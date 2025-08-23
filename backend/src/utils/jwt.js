// utils/jwt.js
const jwt = require("jsonwebtoken");

/**
 * Tạo JWT token cho user
 * @param {Object} payload - Thông tin user (vd: { id, email })
 * @param {String} expiresIn - Thời gian sống của token (default: 1d)
 * @returns {String} token
 */
const generateToken = (payload, expiresIn = "1d") => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

/**
 * Xác thực token JWT
 * @param {String} token
 * @returns {Object} decoded user info
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
};

module.exports = { generateToken, verifyToken };
