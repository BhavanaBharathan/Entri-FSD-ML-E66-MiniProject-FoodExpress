// import { Link } from "react-router-dom";

// import React from 'react'

// export default function Navbar() {
//   return (
//     <nav>

//        <h1 class="text-4xl font-bold text-gray-800 text-center my-6">
//     Swiggy clone
// </h1>
//           <div className="flex gap-6">
//             <Link to="/">Home</Link>
//             <Link to="/menu">Menu</Link>
//             <Link to="/cart">Cart</Link>
//             <Link to="/about">About</Link>
//             <Link to="/contact">Contact</Link>
        

        
//         </div>
//         </nav>
    
//   )
// }
// *****************************************************************************

// import { Link } from "react-router-dom";

// function Navbar() {
 
//     navigate("/"); 
//   return (
//     <nav className="flex justify-between items-center p-4 bg-red-500 text-white">

//       <h1 className="text-xl font-bold">Food Express</h1>
    
//       <div className="flex gap-6">
//         {/* <Link to="/">Login</Link> */}
//         <Link to="/home">Home</Link>
//         <Link to="/menu">Menu</Link>
//         <Link to="/cart">Cart</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
//********************************************************************************************** */



import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-red-500 text-white">
      <h1 className="text-xl font-bold">Food Express</h1>

      <div className="flex gap-6 items-center">
        <Link to="/home" className="bg-red-500 text-white-500 px-4 py-2 rounded hover:bg-red-400">Home</Link>
        <Link to="/menu" className="bg-red-500 text-white-500 px-4 py-2 rounded hover:bg-red-400">Menu</Link>
        <Link to="/cart" className="bg-red-500 text-white-500 px-4 py-2 rounded hover:bg-red-400">Cart</Link>
        <Link to="/about" className="bg-red-500 text-white-500 px-4 py-2 rounded hover:bg-red-400">About</Link>
        <Link to="/contact" className="bg-red-500 text-white-500 px-4 py-2 rounded hover:bg-red-400">Contact</Link>

        {loggedInUser ? (
          <>
            <span className="font-semibold">Hi, {loggedInUser.username}</span>
            <button
              onClick={handleLogout}
              className="bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-200"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/"
            className="bg-red-500 text-white-500 px-4 py-2 rounded hover:bg-red-400"
          >
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
