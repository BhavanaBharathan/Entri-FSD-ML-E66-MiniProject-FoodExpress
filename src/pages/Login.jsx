
// import { useState } from "react";
// import { useNavigate  } from "react-router-dom";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user"); // Default role = user
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // ✅ Hardcoded Admin credentials
//     const adminUsername = "admin";
//     const adminPassword = "admin123";

//     if (role === "admin") {
//       // Check predefined admin username & password
//       if (username === adminUsername && password === adminPassword) {
//         alert("Welcome Admin!");
//         navigate("/adminhome");
//       } else {
//         alert("Invalid Admin credentials!");
//       }
//     } else 
        
// {
//       let users = JSON.parse(localStorage.getItem("users")) || [];
//       const user = users.find(
//         (u) => u.username === username && u.password === password
//       );

//       if (user) {
//         localStorage.setItem("loggedInUser", JSON.stringify(user));
//          navigate("/home")
//       } else {
//         alert("Invalid credentials! Please register.");
//         navigate("/register");
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-red-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Username"
//             className="w-full border p-3 rounded mb-4"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border p-3 rounded mb-4"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           {/* ✅ Role Selection */}
//           <select
//             className="w-full border p-3 rounded mb-4"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>

//           <button className="w-full bg-red-400 text-white p-3 rounded hover:bg-red-500">
//             Login
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Don’t have an account?{" "}
//           <a href="/register" className="text-red-500 hover:underline">
//             Register
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Hardcoded Admin credentials
    const adminUsername = "admin";
    const adminPassword = "admin123";

    if (role === "admin") {
      if (username === adminUsername && password === adminPassword) {
        navigate("/adminhome");
      } else {
        setError("Invalid Admin credentials!");
      }
    } else {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        navigate("/userhome");
      } else {
        setError("Invalid credentials! Please register.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-red-700 mb-2">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full border p-3 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-red-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Role</label>
            <select
              className="w-full border p-3 rounded"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

