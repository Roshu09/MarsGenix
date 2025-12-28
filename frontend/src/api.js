const API_URL = "http://localhost:5000"

export const register = async (name, email, password, role) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, role }),
  })
  return await response.json()
}

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  return await response.json()
}

export const getProfile = async (token) => {
  const response = await fetch(`${API_URL}/user/me`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return await response.json()
}
