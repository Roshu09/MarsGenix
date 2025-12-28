"use client"

export default function Dashboard({ onLogout }) {
  const user = JSON.parse(localStorage.getItem("user") || "{}")

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px" }}>
      <h2>Dashboard</h2>
      <div style={{ background: "#f5f5f5", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>Verified:</strong> {user.isVerified ? "Yes" : "No"}
        </p>
      </div>
      <button
        onClick={onLogout}
        style={{ padding: "10px 20px", background: "#dc3545", color: "white", border: "none" }}
      >
        Logout
      </button>
    </div>
  )
}
