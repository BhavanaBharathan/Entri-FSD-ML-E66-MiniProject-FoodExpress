import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && email && password) {
      // Save to localStorage for demo purposes
      localStorage.setItem("username", username);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);

      alert("Registration successful! Please login.");
      navigate("/"); // Redirect to Login page
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-red-700 mb-6">
          Register
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minlength="8" maxlength="16"
            required
            className="w-full px-4 py-2 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <button
            onClick={handleRegister}
            className="w-full bg-red-400 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-500 transition"
          >
            Register
          </button>

          <p className="text-center text-red-600 text-sm">
            Already have an account?{" "}
            <Link to="/" className="text-red-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
