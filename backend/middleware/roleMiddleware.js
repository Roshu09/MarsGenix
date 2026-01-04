// Role-Based Access Control Middleware
// This middleware checks if the authenticated user has the required role
// It should always be used AFTER authMiddleware (which sets req.user)
// Usage: roleMiddleware(['admin', 'helper']) - allows only these roles
const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    // This should never happen if authMiddleware is used first
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" })
    }

    // Check if user's role is in the allowed roles list
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" })
    }

    next()
  }
}

module.exports = roleMiddleware
