"use client"

import { useState } from "react"
import { register } from "../api"

export default function Register({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  })
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await register(formData.name, formData.email, formData.password, formData.role)

    if (result.token) {
      localStorage.setItem("token", result.token)
      localStorage.setItem("user", JSON.stringify(result.user))
      onSuccess()
    } else {
      setMessage(result.message || "Registration failed")
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="customer">Customer</option>
            <option value="helper">Helper</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          style={{ width: "100%", padding: "10px", background: "#007bff", color: "white", border: "none" }}
        >
          Register
        </button>
      </form>
      {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}
    </div>
  )
}
