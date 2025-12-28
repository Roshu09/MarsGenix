import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">MarsGenix</h1>
          <p className="text-xl text-gray-600">Hyperlocal Service App - Learning Project</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📦 Project Structure</h2>
          <p className="text-gray-600 mb-4">
            This is a student learning project with a <strong>separate backend and frontend</strong>. The files you see
            in this project are meant to be run locally on your machine.
          </p>

          <div className="bg-gray-50 rounded p-4 mb-4">
            <pre className="text-sm text-gray-700">
              {`marsgenix/
 ├─ backend/          (Node.js + Express + MongoDB)
 ├─ frontend/         (React + Vite)
 └─ README.md         (Full setup instructions)`}
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🚀 How to Run This Project</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 1: Download the Project</h3>
              <p className="text-gray-600">
                Click the three dots (•••) in the top right → <strong>Download ZIP</strong>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 2: Setup Backend</h3>
              <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm">
                <div>cd backend</div>
                <div>npm install</div>
                <div>cp .env.example .env</div>
                <div>npm run dev</div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Make sure MongoDB is running locally or update the MONGODB_URI in .env
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 3: Setup Frontend</h3>
              <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm">
                <div>cd frontend</div>
                <div>npm install</div>
                <div>npm run dev</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 4: Test It Out</h3>
              <p className="text-gray-600">
                Open <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:5173</code> and register a new
                user!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">✨ Features</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>JWT-based authentication with bcrypt password hashing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Role-based access control (Customer, Helper, Admin)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Helper verification system</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Protected API routes with middleware</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Simple React frontend for testing</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Learning Project</h3>
          <p className="text-blue-800">
            This is a student project focused on learning backend fundamentals. It&apos;s intentionally kept simple to
            understand core concepts like authentication, role-based access, and API design without over-engineering.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href="https://github.com"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            View README for Detailed Instructions
          </Link>
        </div>
      </div>
    </div>
  )
}
