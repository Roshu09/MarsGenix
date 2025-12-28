module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/marsgenix",
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key-change-this",
  JWT_EXPIRES_IN: "7d",
}
