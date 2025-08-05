// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function AdminHome() {
//   const [categoryName, setCategoryName] = useState("");
//   const [categoryImage, setCategoryImage] = useState("");

//   const [restaurantName, setRestaurantName] = useState("");
//   const [restaurantImage, setRestaurantImage] = useState("");
//   const [restaurantRating, setRestaurantRating] = useState("");
//   const [restaurantCategory, setRestaurantCategory] = useState("");

//   const handleAddCategory = () => {
//     if (!categoryName || !categoryImage) {
//       alert("Please fill all category fields");
//       return;
//     }

//     let categories = JSON.parse(localStorage.getItem("categories")) || [];
//     categories.push({ id: Date.now(), name: categoryName, image: categoryImage });
//     localStorage.setItem("categories", JSON.stringify(categories));

//     alert("Category added!");
//     setCategoryName("");
//     setCategoryImage("");
//   };

//   const handleAddRestaurant = () => {
//     if (!restaurantName || !restaurantImage || !restaurantRating||restaurantCategory ) {
//       alert("Please fill all restaurant fields");
//       return;
//     }

//     let restaurants = JSON.parse(localStorage.getItem("restaurants")) || [];
//     restaurants.push({
//       id: Date.now(),
//       name: restaurantName,
//       image: restaurantImage,
//       rating: restaurantRating,
//       category: restaurantCategory
//     });
//     localStorage.setItem("restaurants", JSON.stringify(restaurants));

//     alert("Restaurant added!");
//     setRestaurantName("");
//     setRestaurantImage("");
//     setRestaurantRating("");
//     setRestaurantCategory("");
//   };

//   return (

//      <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-8 text-center text-red-800">
//         Admin Dashboard
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Add Category Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           {/* <h2 className="text-xl font-semibold mb-4 text-red-700">Add Category</h2> */}
//           <input
//             type="text"
//             placeholder="Category Name"
//             className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
//             value={categoryName}
//             onChange={(e) => setCategoryName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
//             value={categoryImage}
//             onChange={(e) => setCategoryImage(e.target.value)}
//           />
//           <button
//             onClick={handleAddCategory}
//             className="bg-red-500 text-white px-4 py-2 rounded w-full font-semibold hover:bg-red-600 transition"
//           >
//             Add Category
//           </button>
//         </div>

//         {/* Add Restaurant Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           {/* <h2 className="text-xl font-semibold mb-4 text-red-700">Add Restaurant</h2> */}
//           <input
//             type="text"
//             placeholder="Restaurant Name"
//             className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
//             value={restaurantName}
//             onChange={(e) => setRestaurantName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
//             value={restaurantImage}
//             onChange={(e) => setRestaurantImage(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Rating"
//             className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
//             value={restaurantRating}
//             onChange={(e) => setRestaurantRating(e.target.value)}
//           />
//           <button
//             onClick={handleAddRestaurant}
//             className="bg-red-500 text-white px-4 py-2 rounded w-full font-semibold hover:bg-red-600 transition"
//           >
//             Add Restaurant
//           </button>
//         </div>
//       </div>

//       {/* View Categories Link */}
//       <div className="mt-8 text-center">
//         <Link
//           to="/AddCategories"
//           className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition font-semibold"
//         >
//           View Categories
//         </Link>
//       </div>
//     </div>
// )}


//**************after adding price field********************************* */

import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminHome() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [categoryPrice, setCategoryPrice] = useState(""); // ✅ New state for price

  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantImage, setRestaurantImage] = useState("");
  const [restaurantRating, setRestaurantRating] = useState("");
  const [restaurantCategory, setRestaurantCategory] = useState("");

  const handleAddCategory = () => {
    if (!categoryName || !categoryImage || !categoryPrice) {
      alert("Please fill all category fields");
      return;
    }

    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories.push({
      id: Date.now(),
      name: categoryName,
      image: categoryImage,
      price: parseFloat(categoryPrice), // ✅ Store price
    });
    localStorage.setItem("categories", JSON.stringify(categories));

    alert("Category added!");
    setCategoryName("");
    setCategoryImage("");
    setCategoryPrice(""); // ✅ Reset price
  };

  const handleAddRestaurant = () => {
    if (!restaurantName || !restaurantImage || !restaurantRating || !restaurantCategory) {
      alert("Please fill all restaurant fields");
      return;
    }

    let restaurants = JSON.parse(localStorage.getItem("restaurants")) || [];
    restaurants.push({
      id: Date.now(),
      name: restaurantName,
      image: restaurantImage,
      rating: restaurantRating,
      category: restaurantCategory,
    });
    localStorage.setItem("restaurants", JSON.stringify(restaurants));

    alert("Restaurant added!");
    setRestaurantName("");
    setRestaurantImage("");
    setRestaurantRating("");
    setRestaurantCategory("");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-800">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add Category Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Item Name"
            className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={categoryImage}
            onChange={(e) => setCategoryImage(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={categoryPrice}
            onChange={(e) => setCategoryPrice(e.target.value)}
          />
          <button
            onClick={handleAddCategory}
            className="bg-red-500 text-white px-4 py-2 rounded w-full font-semibold hover:bg-red-600 transition"
          >
            Add Food Item
          </button>
        </div>

        {/* Add Restaurant Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Restaurant Name"
            className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={restaurantImage}
            onChange={(e) => setRestaurantImage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Rating"
            className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={restaurantRating}
            onChange={(e) => setRestaurantRating(e.target.value)}
          />
          {/* <select
            className="border p-2 w-full mb-4 rounded"
            value={restaurantCategory}
            onChange={(e) => setRestaurantCategory(e.target.value)}
          > */}

          <input
            type="text"
            placeholder="restaurantCategory"
            className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            value={restaurantCategory}
            onChange={(e) => setRestaurantCategory(e.target.value)}
          />
       
          <button
            onClick={handleAddRestaurant}
            className="bg-red-500 text-white px-4 py-2 rounded w-full font-semibold hover:bg-red-600 transition"
          >
            Add Restaurant
          </button>
        </div>
      </div>

      {/* View Categories Link */}
      <div className="mt-8 text-center">
        <Link
          to="/addCategory"
          className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition font-semibold"
        >
          View Categories
        </Link>
      </div>
    </div>
  );
}
