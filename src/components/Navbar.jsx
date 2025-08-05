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


import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-red-500 text-white">

      <h1 className="text-xl font-bold">Food Express</h1>
    
      <div className="flex gap-6">
        {/* <Link to="/">Login</Link> */}
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
