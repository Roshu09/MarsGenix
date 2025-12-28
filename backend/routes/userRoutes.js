const express = require("express")
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")

const router = express.Router()

// Get current user profile
router.get("/me", authMiddleware, (req, res) => {
  res.json({
    user: req.user,
  })
})

// Admin only route (example)
router.get("/admin/users", authMiddleware, roleMiddleware(["admin"]), (req, res) => {
  res.json({
    message: "Admin access granted",
    user: req.user,
  })
})

// Helper route (example)
router.get("/helper/dashboard", authMiddleware, roleMiddleware(["helper", "admin"]), (req, res) => {
  res.json({
    message: "Helper dashboard",
    user: req.user,
  })
})

module.exports = router
