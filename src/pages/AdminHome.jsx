// import React from 'react'

// import { categories, restaurants } from "../data/mockData";

// export default function AdminHome() {
//   return (
//     <div> <div>
//           <h2 className="text-2xl font-bold mb-4">Categories</h2>
//           <div className="flex gap-4 overflow-x-auto">
//             {categories.map((cat) => (
//               <div key={cat.id} className="text-center">
//                 <img src={cat.image} alt={cat.name} className="w-20 h-20 rounded-full" />
//                 <p>{cat.name}</p>
//               </div>
//             ))}
//           </div>
    
//           <h2 className="text-2xl font-bold mt-6 mb-4">Featured Restaurants</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {restaurants.map((res) => (
//               <div key={res.id} className="border p-4 rounded shadow">
//                 <img src={res.image} alt={res.name} className="w-full h-32 object-cover rounded" />
//                 <h3 className="text-lg font-semibold mt-2">{res.name}</h3>
//                 <p className="text-gray-500">⭐ {res.rating}</p>
//               </div>
//             ))}
//           </div>
//         </div></div>
//   )
// }




import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminHome() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");

  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantImage, setRestaurantImage] = useState("");
  const [restaurantRating, setRestaurantRating] = useState("");
  const [restaurantCategory, setRestaurantCategory] = useState("");

  const handleAddCategory = () => {
    if (!categoryName || !categoryImage) {
      alert("Please fill all category fields");
      return;
    }

    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories.push({ id: Date.now(), name: categoryName, image: categoryImage });
    localStorage.setItem("categories", JSON.stringify(categories));

    alert("Category added!");
    setCategoryName("");
    setCategoryImage("");
  };

  const handleAddRestaurant = () => {
    if (!restaurantName || !restaurantImage || !restaurantRating ) {
      alert("Please fill all restaurant fields");
      return;
    }

    let restaurants = JSON.parse(localStorage.getItem("restaurants")) || [];
    restaurants.push({
      id: Date.now(),
      name: restaurantName,
      image: restaurantImage,
      rating: restaurantRating,
      category: restaurantCategory
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
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add Category Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add Category</h2>
          <input
            type="text"
            placeholder="Category Name"
            className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={categoryImage}
            onChange={(e) => setCategoryImage(e.target.value)}
          />
          <button
            onClick={handleAddCategory}
            className="bg-green-500 text-white px-4 py-2 rounded w-full font-semibold hover:bg-green-600 transition"
          >
            Add Category
          </button>
        </div>

        {/* Add Restaurant Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add Restaurant</h2>
          <input
            type="text"
            placeholder="Restaurant Name"
            className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={restaurantImage}
            onChange={(e) => setRestaurantImage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Rating"
            className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={restaurantRating}
            onChange={(e) => setRestaurantRating(e.target.value)}
          />
          <button
            onClick={handleAddRestaurant}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full font-semibold hover:bg-blue-600 transition"
          >
            Add Restaurant
          </button>
        </div>
      </div>

      {/* View Categories Link */}
      <div className="mt-8 text-center">
        <Link
          to="/categories"
          className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition font-semibold"
        >
          View Categories
        </Link>
      </div>
    </div>
    // <div className="p-6 bg-gray-100 min-h-screen">
    //   <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

    //   {/* Add Category */}
    //   <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    //     <h2 className="text-xl font-semibold mb-4">Add Category</h2>
    //     <input
    //       type="text"
    //       placeholder="Category Name"
    //       className="border p-2 w-full mb-2 rounded"
    //       value={categoryName}
    //       onChange={(e) => setCategoryName(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Image URL"
    //       className="border p-2 w-full mb-2 rounded"
    //       value={categoryImage}
    //       onChange={(e) => setCategoryImage(e.target.value)}
    //     />
    //     <button
    //       onClick={handleAddCategory}
    //       className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    //     >
    //       Add Category
    //     </button>
    //   </div>

    //   {/* Add Restaurant */}
    //   <div className="bg-white p-6 rounded-lg shadow-md">
    //     <h2 className="text-xl font-semibold mb-4">Add Restaurant</h2>
    //     <input
    //       type="text"
    //       placeholder="Restaurant Name"
    //       className="border p-2 w-full mb-2 rounded"
    //       value={restaurantName}
    //       onChange={(e) => setRestaurantName(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Image URL"
    //       className="border p-2 w-full mb-2 rounded"
    //       value={restaurantImage}
    //       onChange={(e) => setRestaurantImage(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Rating"
    //       className="border p-2 w-full mb-2 rounded"
    //       value={restaurantRating}
    //       onChange={(e) => setRestaurantRating(e.target.value)}
    //     />
    //     {/* <input
    //       type="text"
    //       placeholder="Category"
    //       className="border p-2 w-full mb-2 rounded"
    //       value={restaurantCategory}
    //       onChange={(e) => setRestaurantCategory(e.target.value)}
    //     /> */}
    //     <button
    //       onClick={handleAddRestaurant}
    //       className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    //     >
    //       Add Restaurant
    //     </button>

    //      <Link to="/addcategory" className="hover:text-red-500">Categories</Link>

    //   </div>
    // </div>
  );
}
