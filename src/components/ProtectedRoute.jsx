// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function ProtectedRoute({ children, role }) {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/" />;
//   }

//   if (role && user.role !== role) {
//     return <Navigate to="/" />;
//   }

//   return children;
// }


import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    return <Navigate to="/" />;
  }

  if (role && loggedInUser.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}
