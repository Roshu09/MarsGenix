"use client"

import { useState, useEffect } from "react"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function App() {
  const [page, setPage] = useState("login")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsLoggedIn(true)
      setPage("dashboard")
    }
  }, [])

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    setPage("dashboard")
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setIsLoggedIn(false)
    setPage("login")
  }

  return (
    <div>
      {!isLoggedIn && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={() => setPage("login")} style={{ margin: "0 10px" }}>
            Login
          </button>
          <button onClick={() => setPage("register")} style={{ margin: "0 10px" }}>
            Register
          </button>
        </div>
      )}

      {page === "login" && <Login onSuccess={handleLoginSuccess} />}
      {page === "register" && <Register onSuccess={handleLoginSuccess} />}
      {page === "dashboard" && <Dashboard onLogout={handleLogout} />}
    </div>
  )
}

export default App
