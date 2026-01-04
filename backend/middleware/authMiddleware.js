const jwt = require("jsonwebtoken")
const config = require("../config")

// Authentication Middleware
// This middleware checks if a valid JWT token is present in the request headers
// It extracts the token from "Authorization: Bearer <token>" format
// If valid, it adds the decoded user info (id, email, role) to req.user
// This allows protected routes to know who is making the request
const authMiddleware = (req, res, next) => {
  // Extract token from Authorization header (format: "Bearer <token>")
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "No token provided" })
  }

  try {
    // Verify the token and decode the user information
    const decoded = jwt.verify(token, config.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" })
  }
}

module.exports = authMiddleware
