// import { BrowserRouter ,Routes,Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import Cart from "./pages/cart";
// import About from "./pages/About";
// import Contact from "./pages/Contact"
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Login from "./pages/Login";
// import UserHome from "./pages/UserHome";
// import Checkout from "./pages/CheckOut";


// export default function App() {
//   return (
//     <BrowserRouter>
//     <Navbar />
    
//     <div>
//        <Routes>
//           {/* <Route path="/" element={<Login/>}></Route> */}
//           <Route path="/userhome" element={<UserHome/>}></Route>
//            <Route path="/home" element={<Home/>}></Route>
//           <Route path="/menu" element={<Menu/>}></Route>
//           <Route path="/cart" element={<Cart/>}></Route>
//           <Route path="/about" element={<About/>}></Route>
//           <Route path="/contact" element={<Contact/>}></Route>
//           <Route path="/checkout" element={<Checkout />}> </Route>


//        </Routes>
//        <Footer />
//     </div>
//     </BrowserRouter>
//   )
// }

//***************************************************mine************ */
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import Cart from "./pages/Cart";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="p-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// ***************************************************************************** */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserHome from "./pages/UserHome";
import AdminHome from "./pages/AdminHome";
import Checkout from "./pages/CheckOut";
import ProtectedRoute from "./components/ProtectedRoute";
import AddCategory from "./pages/AddCategory";

function Layout() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/userhome"
            element={
              // <ProtectedRoute role="user">
                <UserHome />
              //  </ProtectedRoute>
            }
          />
          <Route
            path="/adminhome"
            element={
              // <ProtectedRoute role="admin">
                <AdminHome />
              // </ProtectedRoute>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/addCategory" element={<AddCategory />} />


        </Routes>
      </div>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}


