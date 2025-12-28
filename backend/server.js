const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const config = require("./config")
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/auth", authRoutes)
app.use("/user", userRoutes)

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "MarsGenix API is running" })
})

// Connect to MongoDB and start server
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB")
    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`)
    })
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error)
  })
