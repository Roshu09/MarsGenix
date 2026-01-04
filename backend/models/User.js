const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "helper", "admin"],
      default: "customer",
    },
    // isVerified field determines if a user can access certain features
    // Helpers need manual verification before they can offer services
    // This protects the platform from unverified service providers
    // Customers and admins are auto-verified since they don't provide services
    isVerified: {
      type: Boolean,
      default: function () {
        // Helpers start as unverified (need approval)
        // Customers and admins are auto-verified
        return this.role !== "helper"
      },
    },
  },
  { timestamps: true },
)

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model("User", userSchema)
